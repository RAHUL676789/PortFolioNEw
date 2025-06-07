import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import image from "../public/img.jpg"
import p1 from "../public/page1.png"
import p2 from "../public/page2.png"
import p3 from "../public/page3.png"
import p4 from "../public/page4.png"

import p21 from "../public/p21.png"
import p22 from "../public/p22.png"
import p23 from "../public/p23.png"
import p24 from "../public/p24.png"


import p31 from "../public/p31.png"
import p32 from "../public/p32.png"
import p33 from "../public/p33.png"

import p41 from "../public/p41.png"
import p42 from "../public/p42.png"
import p43 from "../public/p43.png"


import { FaJava } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { FaGithub } from "react-icons/fa6";




import { ScrollTrigger } from "gsap/ScrollTrigger";



import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

import './App.css';
import ProjectsSection from './About';

const App = () => {


  let skillRef = useRef(null);

  // const skillRef = useRef(null);

  useEffect(() => {
    const icons = skillRef.current?.querySelectorAll(".skill-icon") || [];

    icons.forEach((icon, index) => {
      const isOdd = index % 2 === 0;

      gsap.fromTo(
        icon,
        { opacity: 0, y: isOdd ? -40 : 40 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            toggleActions: "play none none reset",
            // markers: true, // uncomment to debug
          },
        }
      );
    });
  }, []);



  // let project1Arr = [image1,image2,image3,image4];

  const [index, setIndex] = useState(0);

  const [projectObject, setprojectObject] = useState({
    project1: {
      arr: [p1, p2, p3, p4],
      github: "https://github.com/RAHUL676789/DeltaProject",
      link: "https://wanderlust-v6tc.onrender.com/listing",
      projectName: "wanderlust"
    },
    project2: {
      arr: [p21, p22, p23, p24],
      github: "https://github.com/RAHUL676789/CareerBridge",
      link: "https://careerbridgeui.onrender.com/",
      projectName: "CareerBridge"
    },
    project3: {
      arr: [p31, p32, p33],
      github: "https://github.com/RAHUL676789/CreatoMarket",
      link: "",
      projectName: "CreatoMarket"
    },
    project4: {
      arr: [p41, p42, p43],
      github: "https://github.com/RAHUL676789/CreatoMarket",
      link: "",
      projectName: "java+dsa"


    },

  })

  let handleImgeNext = (arr) => {

    if (index < arr.length - 1) {
      setIndex((prev) => prev + 1)
    }
    if (index == arr.length - 1) {
      setIndex((prev) => arr.length % arr.length)
    }
  }


  let handleImgePrev = (arr) => {
    console.log(arr)
    if (index < arr.length && index > 0) {
      setIndex((prev) => prev - 1)
    }
  }

  let handleGuitar = (dets) => {
    console.log(dets)




    gsap.to(".guitar svg path", {
      attr: { d: `M 10 86 Q ${dets.clientX} ${dets.clientY} 990 86` },
      duration: 2.5,
      ease: "elastic.out(1,0.1)"
    })



  }


  let guitarMove = (dets) => {
    gsap.to(".guitar svg path", {
      attr: { d: "M 10 86 Q 10 86 990 86" },
      duration: 2,
      ease: "elastic.out(1,0.1)"

    })

  }




  let breakContent = () => {
    const h1 = document.querySelector(".homecontaint h1");
    const h1text = h1.innerText;
    const sprh1 = h1text.split("");

    let cluster = "";

    sprh1.forEach((e, i) => {
      const cls = i < sprh1.length / 2 ? "a" : "b";

      // Agar space hai, to use bhi span me wrap kro with fixed width
      if (e === " ") {
        cluster += `<span class="inline-block w-2">&nbsp;</span>`;
      } else {
        cluster += `<span class="${cls} inline-block leading-0">${e}</span>`;
      }
    });

    h1.innerHTML = cluster;
  }

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from('#nav .resume ', {
      y: -60,
      duration: 0.5,
      delay: 0.4,
      stagger:0.2
    });

    tl.from('#nav .mainNav .mainNav1', {
      y: -60,
      duration: 0.5,
      stagger: 0.2,
    });

    breakContent();

    gsap.from("h1 .a", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.15,
      color: "red",
      scrollTrigger: {
        trigger: "h1",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("h1 .b", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      stagger: -0.15,
      color: "blue",
      scrollTrigger: {
        trigger: "h1",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".passion",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl2.from(".passion", {
      y: 40,
      opacity: 0,
      duration: 1,
    });

    tl2.from(".passionConent", {
      y: 40,
      opacity: 0,
      duration: 1,
    }, "-=0.7");

    gsap.from(".img", {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".img",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ri-linkedin-line",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl3.from(".ri-linkedin-line", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });

    tl3.from(".ri-instagram-line", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    }, "-=0.3");

    tl3.from(".ri-github-line", {
      x: 100,
      opacity: 0,
      duration: 0.5,
    }, "-=0.3");
  });





  const navLinkClass = `
    relative pb-1

    
    after:absolute after:left-0 after:bottom-0
    after:h-0.5 after:w-0 after:bg-teal-500
    after:transition-all after:duration-300
    hover:after:w-full
  `;


  let cursorRef = useRef(null)




  useEffect(() => {
    let handleCursor = (dets) => {

      gsap.to(cursorRef.current, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
        delay: 0.23,
        backgroundColor: `rgb(${dets.clientX % 255},${dets.clientY % 255}, ${(dets.clientX + dets.clientY) % 255})`,
        ease: "elastic.out(1,0.1)"

      }
      )
    }
    window.addEventListener("mousemove", handleCursor);

    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };


    // about section

  }, [])


  let projectRef = useRef(null)

  let parentRef = useRef(null)
  let academicRef = useRef(null)
  let personRef = useRef(null)

  let h2ref = useRef(null);
  let h2parentRef = useRef(null);


  const form = useRef();

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
console.log(serviceId,templateId,publicKey)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error);
          alert("Failed to send.");
        }
      );
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(personRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,


        },
      });


      gsap.from(h2ref.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        scrollTrigger: {
          trigger: h2parentRef.current,
          scrub: true, start: "top 70%",
          end: "top 30%",
        }
      })

      gsap.from(academicRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,

        },
      });
    }, parentRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  let tl2 = gsap.timeline();
  const handlickNav = () => {
    tl2.play();
    tl2.to(".menu", {
      top: 0,
      right: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.from(".nav-link2", {
      x: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.3
    });
  };

  const handlickNavRev = () => {

    tl2.to(".menu", {
      top: "-500%",
      duration: 0.5,
      right: 0,
      ease: "power2.out"
    })

  };





  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      });
    }, projectRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="main font-sans ">
      <div ref={cursorRef} className="cursor h-3 w-3 fixed rounded-full bg-red-500 z-10000"></div>
      {/* Navbar */}
      <nav
        id="nav"
        className="fixed    backdrop-blur-2xl font-light top-0 left-0 w-full h-16 bg-[#fff] text-white shadow z-50  flex justify-between items-center px-14"
      >
        <div className="relative  resume group inline-block  overflow-hidden shadow-md">
          <button onClick={()=>(
            window.open("../public/Resume.pdf")
          )} className="relative z-10 px-8 py-3 font-semibold text-white bg-black/80 backdrop-blur-md border border-white  transition-all duration-300 group-hover:text-white cursor-pointer" title='view Resume'>
            Resume
          </button>

          {/* Animated background span */}
          <span className="absolute inset-0 z-0 scale-x-0 origin-left transform transition-transform duration-500 ease-out bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-700 group-hover:scale-x-100"></span>
        </div>




        <ul className=" gap-8 font-medium hidden mainNav md:flex border">
          <li className={`${navLinkClass}  mainNav1`}>
            <Link to="home" spy={true} key="home"   activeClass="text-green-500" smooth={true} duration={500} className="cursor-pointer text-black">
              Home
            </Link>
          </li>
          <li className={`${navLinkClass} mainNav1`}>
            <Link spy={true} key="about" to="about"  activeClass="text-green-500"  smooth={true} duration={500} className="cursor-pointer text-black">
              About
            </Link>
          </li>
          <li className={`${navLinkClass} mainNav1`}>
            <Link spy={true} key='projects' to="projects"  activeClass="text-green-500"  smooth={true} duration={500} className="cursor-pointer text-black">
              Projects
            </Link>
          </li>
          <li className={`${navLinkClass} mainNav1`}>
            <Link spy={true} key="skills" to="skills"  activeClass="text-green-500"  smooth={true} duration={500} className="cursor-pointer text-pink-400">
              Skills
            </Link>
          </li>
          <li className={`${navLinkClass} mainNav1`}>
            <Link spy={true} key="contact" to="contact"  activeClass="text-green-500"  smooth={true} duration={500} className="cursor-pointer text-black">
              Contact
            </Link>
          </li>
        </ul>
        <i onClick={handlickNav} className="ri-menu-3-line text-green-950 text-2xl cursor-pointer block md:hidden"></i>

        <div className="menu absolute top-[-500%] left-0 py-6 md:hidden block bg-[#fff] w-full ">
          <i onClick={handlickNavRev} class="ri-close-line nav-link2 text-red-950 absolute right-6 text-2xl top-6 "></i>
          <ul className=" gap-8 font-medium flex flex-col justify-center items-center">
            <li className={`${navLinkClass} nav-link2 `}>
              <Link onClick={handlickNavRev} to="home" smooth={true} duration={500} className="cursor-pointer text-[#005F5A] font-bold">
                Home
              </Link>
            </li>
            <li onClick={handlickNavRev} className={`${navLinkClass} nav-link2`}>
              <Link to="about" onClick={handlickNavRev} smooth={true} duration={500} className="cursor-pointer text-[#005F5A] font-bold">
                About
              </Link>
            </li>
            <li onClick={handlickNavRev} className={`${navLinkClass} nav-link2`}>
              <Link to="projects" onClick={handlickNavRev} smooth={true} duration={500} className="cursor-pointer text-[#005F5A] font-bold">
                Projects
              </Link>
            </li>
            <li onClick={handlickNavRev} className={`${navLinkClass} nav-link2`}>
              <Link to="skills" onClick={handlickNavRev} smooth={true} duration={500} className="cursor-pointer text-[#005F5A] font-bold">
                Skills
              </Link>
            </li>
            <li onClick={handlickNavRev} className={`${navLinkClass} nav-link2`}>
              <Link to="contact" onClick={handlickNavRev} smooth={true} duration={500} className="cursor-pointer text-[#005F5A] font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <Element name="home" className=" home h-screen w-full">
        <div className="h-screen w-full bg-[#F3F4F6] text-black flex justify-between items-center px-4">
          <div className="w-full text-center md:w-[65%] homecontaint">
          <h2 className='text-2xl font-bold text-pink-800'> Hi,i'm</h2> <h1 className="text-4xl text-teal-800 font-bold mb-4">Rahullodhi</h1>
            <p className="text-lg md:text-xl mb-6 passion">
              A passionate <span className="text-teal-400 font-semibold">Full-Stack Developer</span> skilled in the MERN Stack, Java, and DSA.
            </p>
            <p className="text-md md:text-lg text-black passionConent">
              I build responsive web applications with modern technologies and write optimized code to solve real-world problems.
            </p>
            <div className="mt-10 flex gap-2 justify-center items-center">
              <a href='https://www.linkedin.com/in/rahul-lodhi/' target='_blank' rel='noopener noreferrer' className="ri-linkedin-line text-xl text-[#0077B5] bg-white/10 backdrop-blur-sm border border-[#0077B5] px-2 py-1 rounded-lg hover:bg-[#0077B5] hover:text-white transition-colors duration-300 cursor-pointer" />
              <a href='https://instagram.com/rahull0dhi45' target='_blank' className="ri-instagram-line text-xl text-pink-500 bg-white/10 backdrop-blur-sm border border-pink-500 px-2 py-1 rounded-lg hover:bg-pink-600 hover:text-white transition-colors duration-300 cursor-pointer" />
              <a href='https://github.com/RAHUL676789' target='_blank' className="ri-github-line text-xl text-gray-300 bg-white/10 backdrop-blur-sm border border-gray-500 px-2 py-1 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
          <div className="img hidden md:block p-0.5 mt-8 rounded-full bg-pink-400 border-4 border-teal-800">
            <img src={image} alt="rahullodhi" className='h-[300px] w-[300px] object-cover rounded-full image border-2 border-[#00D5BE]' />
          </div>
        </div>
      </Element>

      <div onMouseMove={handleGuitar} onMouseLeave={guitarMove} className="guitar w-full bg-white mt-4 ">
        <svg width="1017" height="150" className='bg-white'>
          <path
            d="M 10 80 Q 500 75, 900 80"
            stroke="black"
            fill="transparent" />
        </svg>
      </div>

      <Element name="about" className="w-full min-h-screen py-8 bg-[#D1D5DC] text-gray-800 px-4">
        <div ref={h2parentRef} className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
          <h2 ref={h2ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-teal-800 mb-8">
            About Me
          </h2>

          <div ref={parentRef} className="w-full flex flex-col md:flex-row gap-8 justify-center items-start">

            {/* Left - Personal Intro */}
            <div ref={personRef} className="w-full md:w-1/2">
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                I’m <span className="font-semibold text-teal-600">Rahul Lodhi</span>, a passionate Full Stack Developer with a strong foundation in the
                <span className="font-semibold text-teal-600"> MERN stack, Java, and Data Structures & Algorithms</span>.
              </p>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                I enjoy building responsive, scalable web applications and solving coding problems that make a real impact.
              </p>
            </div>

            {/* Right - Academic Details */}
            <div ref={academicRef} className="w-full md:w-1/2 text-left md:text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-teal-700">Academic Details:</h3>
              <ul className="text-base md:text-lg space-y-3 text-gray-700">
                <li>
                  🎓 <span className="font-semibold">B.Tech</span> from <span className="font-semibold text-teal-700">Radharaman Engineering College, Bhopal</span> – CGPA: <span className="font-semibold">8.12</span>
                </li>
                <li>
                  🏫 Completed 12th from <span className="font-semibold text-teal-700">Government Model Higher Secondary School, Vijayaraghvarh</span> – Percentage: <span className="font-semibold">88.2%</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </Element>


      {/* Project Card Layout */}

      <h2 className="prb text-center text-4xl mb-4 font-bold text-teal-600">
        Projects
      </h2>

      {Object.entries(projectObject).map(([key, value]) => (
        <ProjectsSection arr={value.arr} github={value.github} link={value.link} projectName={value.projectName} />
      ))}


      <Element
        name="skills"
        className="py-10 w-full bg-gray-800 text-white flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-6 text-center">
          Key Skills
        </h2>

        <div
          ref={skillRef}
          className="w-full md:w-4/5 px-4 max-h-[75vh] overflow-y-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center overflow-hide "
        >
          {[
            { icon: <FaJs size={50} />, color: "#c2dc04", textColor: "#c2dc04" },
            { icon: <FaJava size={50} />, color: "#E87408", textColor: "#E87408" },
            { icon: <MdHtml size={50} />, color: "#dd4300", textColor: "#dd4300" },
            { icon: <MdCss size={50} />, color: "#1b84c1", textColor: "#1b84c1" },
            { icon: <FaBootstrap size={50} />, color: "#7811fa", textColor: "#7811fa" },
            { icon: <RiTailwindCssFill size={50} />, color: "#25BFBA", textColor: "#25BFBA" },
            { icon: <FaReact size={50} />, color: "#00D1F7", textColor: "#00D1F7" },
            { icon: <FaNodeJs size={50} />, color: "#509941", textColor: "#509941" },
            { icon: <SiMongodb size={50} />, color: "#57AA48", textColor: "#57AA48" },
            { icon: <SiMysql size={50} />, color: "#235D6E", textColor: "#235D6E" },
            { icon: <FaGithub size={50} />, color: "#111827", textColor: "#000000" },
          ].map((skill, index) => (
            <div
              key={index}
              className="skill-icon rounded-full border p-3 cursor-pointer "
              style={{
                backgroundColor: skill.color,
                color: skill.textColor,
              }}
            >
              <div className="rounded-full bg-white p-2 hover:scale-150  transform  transition-transform duration-300  ">{skill.icon}</div>
            </div>
          ))}
        </div>
      </Element>



      <Element name="contact" className="scroll-mt-16 pt-16 pb-16  w-full flex  bg-gray-900 text-white   justify-center items-center flex-col">

        <h2 className='text-2xl'>Contact-Me</h2>
        <div className="social flex bg-amber-50   mb-3 px-4 py-2  gap-2 justify-center ">

        
          <a href="https://wa.me/919302969810?text=Hello%20Rahul%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect" className='text-green-600 hover:text-green-800' target="_blank">
            {/* <img src="whatsapp-icon.png" alt="WhatsApp" width="40" /> */}
            <i class="ri-whatsapp-fill">WhatsApp</i>

          </a>
        
          <a
            href="https://instagram.com/rahull0dhi45"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:text-pink-800"
          >
            {/* <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" /> */}
          <i class="ri-instagram-fill">Instagram</i>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-[90%] md:w-[80%] lg:w-[60%] bg-white text-black border rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-6 items-center mx-auto mb-10">

          {/* Username Field */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-gray-800">Username</label>
            <input
              type="text"
              id="name"
              name="to_name"
              placeholder="Enter your name"
              className="bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
            />
          </div>

          {/* Email Field */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              name="from_name"
              placeholder="Enter your email"
              className="bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
            />
          </div>

          {/* Message Field */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="msg" className="font-semibold text-gray-800">Message</label>
            <textarea
              id="msg"
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="relative inline-block group mt-4 text-white w-full sm:w-auto">
            <button className="relative z-10 px-10 py-3 font-semibold border border-white text-white bg-black/80 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300 group-hover:text-white flex items-center gap-2 w-full sm:w-auto justify-center rounded-xl">
              💼 Hire Me
            </button>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transition-transform duration-500 ease-out transform scale-x-0 origin-left group-hover:scale-x-100 z-0 rounded-xl"></span>
          </div>

        </form>




      </Element>

      <h1 className='text-center text-2xl bg-pink-200 text-black py-2 '>#Thanks For Scrolling</h1>
    </div>
  );
};

export default App;