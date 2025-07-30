import "./App.css";
import Porfile from "./assets/profilepic.webp";
import Project2 from "./assets/Project2.webp";
import Project1 from "./assets/project1.webp";
import Project3 from "./assets/project3.webp";
import Project4 from "./assets/Project4.webp";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (message.length < 7) {
      toast.error("Message is Too Short", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    emailjs
      .sendForm("service_j6zv6qj", "template_bl7lmlm", form.current, {
        publicKey: "XWRkBGsohx-kAjZcw",
      })
      .then(
        () => {
          console.log("MESSAGE SENT SUCCESFULLY");
          setEmail("");
          setMessage("");
          notify();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const notify = () => toast("Message Sent Succesfully");

  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-5xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900 bg-black " : ""
        }  fixed left-0 right-0 top-0 z-20 bg-black`}
        id="navbar"
      >
        <div className="container m-auto  px-4 py-6 max-w-5xl bg-black max-sm:py-4  ">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <a href="#">
                <h1 className="font-bold text-2xl max-sm:hidden">
                  &lt;Vikash /&gt;
                </h1>
              </a>
            </div>
            <div>
              <ul className="flex gap-5">
                <li>
                  <a
                    href="#experience"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28 ">
        {/* Intro/Banner section */}
        <section id="hero-section">
          <div className="container px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 sm:gap-12 text-center sm:text-left items-center">
            <div className="flex-1">
              <div className="mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="font-bold text-5xl max-sm:text-4xl leading-tight mb-2">
                Hello, I'm <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Vikash</span>
              </h1>
              
              <div className="w-max mx-auto sm:mx-0 mb-6">
                <h2 className="font-bold text-3xl max-sm:text-2xl gradiant-text">
                  Full Stack Developer
                </h2>
              </div>
              
              <p className="text-gray-400 max-w-lg mx-auto sm:mx-0 text-lg leading-relaxed mb-8">
                Passionate about coding and creation, crafting secure, scalable apps with clean code and real impact — from building robust APIs at 
                <span className=" font-medium"> GoTrust</span> to launching projects like 
                <span className="font-medium"> MockMasters</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 mb-8">
                <a
                  href="https://drive.google.com/file/d/1O1iDXsJkTsd_WEVsakMjacy3Lg_MFLzF/view?usp=sharing"
                  target="_blank"
                  className="group"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </button>
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/VikashBurman"
                    target="_blank"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/vikashburman/"
                    target="_blank"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd" />
                        <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Stats or Quick Info */}
              {/* <div className="flex flex-wrap gap-6 justify-center sm:justify-start text-sm">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-blue-400">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-cyan-400">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-green-400">5+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
              </div> */}
            </div>
            
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
              <img
                src={Porfile}
                className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full object-cover mx-auto border-4 border-gradient-to-r from-blue-500 to-cyan-500 shadow-2xl"
              />
            </div>
          </div>
        </section>
        {/* Experience section */}
        <section id="experience">
          <div className="container m-auto px-4 sm:py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My journey in software development, building scalable solutions and contributing to innovative projects
              </p>
            </div>
            
            <div className="mt-11 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600 hidden sm:block"></div>
              
              <div className="space-y-12">
                {/* Current Position */}
                <div className="relative">
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-black hidden sm:block"></div>
                  <div className="sm:ml-16 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Junior Software Developer</h3>
                        <p className="text-blue-400 font-semibold text-lg">GoTrust</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 lg:mt-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-400 text-sm">April 2025 - Jul 2025</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Developed secure RESTful APIs (Keycloak, PostgreSQL, Sequelize) for ROPA and Privacy Policy modules, implementing multi-level data management for 10+ departments
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Automated lifecycle and payroll tracking for 200+ employees via GoEms Employee Management System cron jobs
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Optimized 15+ backend APIs, reducing time complexity from O(n³) to O(n) and O(n²) to O(n), validated using JMeter/SigNoz
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Node.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Express.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">PostgreSQL</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Keycloak</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">API Optimization</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Jmeter</span>
                    </div>
                  </div>
                </div>

                {/* Previous Position */}
                <div className="relative">
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-black hidden sm:block"></div>
                  <div className="sm:ml-16 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Full Stack Developer Intern</h3>
                        <p className="text-blue-400 font-semibold text-lg">ShaliniVirtuals</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 lg:mt-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-400 text-sm">Jun 2024 - Aug 2024</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Redesigned and developed company website using Next.js, migrating from HTML/CSS/JS/Bootstrap
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Achieved 40% improved performance and enhanced user experience
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Implemented client testimonials section by integrating LinkedIn reviews to enhance credibility
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Next.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">React</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Performance Optimization</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">TailwindCSS</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcasing my development skills through innovative and impactful projects
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-xl p-6 flex-1 hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10">
                <img src={Project1} className="w-full h-[13rem] object-cover rounded-lg" />
                <h3 className="text-2xl font-semibold mt-6 mb-3">MockMasters</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-4">
                  MockMasters is a full-stack exam preparation platform designed
                  to help students prepare for NIMCET and core subjects. Built
                  with React, Node.js, and MongoDB, it features a user-friendly
                  interface for practicing mock exams, tracking progress, and
                  enhancing learning with real-time performance analytics.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">MongoDB</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Analytics</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                    <a href="https://mockmasters.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-blue-500 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    <a
                      href="https://github.com/VikashBurman/MockMasters-Frontend/tree/main"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-xl p-6 flex-1 hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10">
                <img src={Project4} className="w-full h-[13rem] object-cover rounded-lg" />
                <h3 className="text-2xl font-semibold mt-6 mb-3">DailyBiz</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-4">
                  DailyBiz is a dynamic content management platform that allows users to create, edit, and share personal articles with ease. Built using React, Node.js, and MongoDB, it features real-time text editing, file uploads, robust authentication, and a responsive design for seamless interaction across devices.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">MongoDB</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">CMS</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                    <a href="https://dailybiz.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-blue-500 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    <a
                      href="https://github.com/VikashBurman/DailyBiz"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-xl p-6 flex-1 hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10">
                <img src={Project3} className="w-full h-[13rem] object-cover rounded-lg" />
                <h3 className="text-2xl font-semibold mt-6 mb-3">ShaliniVirtuals</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-4">
                  ShaliniVirtuals is a modern recruitment agency website built with Next.js, replacing the outdated version with a more intuitive and responsive design. The site provides a smooth user experience for job seekers and employers, featuring job listings, applications, seamless navigation, optimized performance, and fast-loading, mobile-friendly pages.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">SEO</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Responsive</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                    <a href="https://www.shalinivirtuals.com/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-blue-500 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    <a
                      href="https://github.com/VikashBurman"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-500 rounded-xl p-6 flex-1 hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10">
                <img src={Project2} className="w-full h-[13rem] object-cover rounded-lg" />
                <h3 className="text-2xl font-semibold mt-6 mb-3">QuickMatch</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-4">
                  QuickMatch is a dating app enabling users to send connection requests, accept/reject them, and engage with others through a dynamic feed. Built with MongoDB, Express, React, Node.js, and Redux, it features JWT authentication, API & schema validation, pagination, and efficient state management for a smooth user experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">MERN Stack</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Redux</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">JWT</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Real-time</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                    <a
                      href="https://github.com/VikashBurman/QuickMatch-Backend"
                      target="_blank"
                    >
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-blue-500 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    <a
                      href="https://github.com/VikashBurman/QuickMatch-Backend"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C/C++</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Java</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    HTML,Tailwind,Css & Bootstrap
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node.js</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section> */}

        <section id="skills">
          <div className="container m-auto px-4 py-14">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technologies & Skills</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">C/C++</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Java</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">JavaScript</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">HTML/CSS</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Tailwind CSS</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">React.js</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Next.js</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Redux</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Node.js</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Express.js</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">MongoDB</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">MySQL</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">PostgreSQL</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">RESTful API</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Git/GitHub</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">Postman</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <p className="font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">JMeter</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8" id="about">
          <div className="container m-auto px-4 space-y-10">
            <h2 className="text-2xl font-semibold">Education</h2>
            
            <div className="mt-11 relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              
              <div className="space-y-12">
                {/* Master's Degree */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black"></div>
                  <div className="ml-12 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Master of Computer Applications (MCA)</h3>
                        <p className="text-blue-400 font-medium">NIT Jamshedpur, Jharkhand</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-1 sm:mt-0 bg-gray-800 px-3 py-1 rounded-full">2025</span>
                    </div>
                    
                  </div>
                </div>

                {/* Bachelor's Degree */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black"></div>
                  <div className="ml-12 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
                        <p className="text-blue-400 font-medium">Kurukshetra University, Kurukshetra</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-1 sm:mt-0 bg-gray-800 px-3 py-1 rounded-full">2021</span>
                    </div>
                    
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black"></div>
                  <div className="ml-12 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Higher Secondary Education (12th)</h3>
                        <p className="text-blue-400 font-medium">SMB Gita Sr. Sec. School, Kurukshetra</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-1 sm:mt-0 bg-gray-800 px-3 py-1 rounded-full">2018</span>
                    </div>
                    
                  </div>
                </div>

                {/* Secondary Education */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black"></div>
                  <div className="ml-12 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Secondary Education (10th)</h3>
                        <p className="text-blue-400 font-medium">MNB Gita Niketan Vidya Mandir, Kurukshetra</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-1 sm:mt-0 bg-gray-800 px-3 py-1 rounded-full">2016</span>
                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="container m-auto px-4 py-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate or have a question? I'd love to hear from you. Drop me a message and I'll get back to you soon.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  vikashburman.info@gmail.com
                </div>
                <p className="text-gray-400 text-sm">
                  Or use the form below to send me a message directly
                </p>
              </div>
              
              <form
                action="#"
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    id="email"
                    onChange={handleEmailChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 text-white rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 placeholder-gray-400"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 text-white rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10alo pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Made with ❤️ by Vikash Burman. All rights reserved.
          </p>
        </div>
        
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;





