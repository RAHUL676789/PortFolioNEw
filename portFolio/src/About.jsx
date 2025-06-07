import React, { useLayoutEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = ({ arr, github, link, projectName }) => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [index, setIndex] = useState(0);

  const handleImgeNext = () => {
    setIndex((prev) => (prev + 1) % arr.length);
  };

  const handleImgePrev = () => {
    setIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
               toggleActions: "restart none none reset",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          delay: i * 0.1,
        });
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <Element
      ref={sectionRef}
      name="projects"
      className="w-full mb-20  flex flex-col items-center py-10 px-4 sm:px-8"
    >
      <div
        ref={(el) => (cardRefs.current[0] = el)}
        className="relative w-full max-w-3xl h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] flex items-center justify-center"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg group">
          {/* Background Image */}
          <img
            src={arr[index]}
            alt={`Project ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-between p-4 sm:p-6 transition-all duration-300 group-hover:bg-black/70">
            {/* Centered Project Name */}
            <div className="flex-1 flex items-center justify-center text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md z-20">
                {projectName}
              </h2>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-20 w-full">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition text-center"
              >
                View More
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 rounded-full text-white font-semibold transition text-center"
              >
                <i className="ri-github-line text-2xl"></i>
                GitHub
              </a>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute top-3 right-3 z-20 flex gap-2">
            <button
              onClick={handleImgePrev}
              className="bg-white/30 hover:bg-white/50 rounded-full p-2"
            >
              <i className="ri-arrow-left-s-line text-xl text-white"></i>
            </button>
            <button
              onClick={handleImgeNext}
              className="bg-white/30 hover:bg-white/50 rounded-full p-2"
            >
              <i className="ri-arrow-right-s-line text-xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ProjectsSection;
