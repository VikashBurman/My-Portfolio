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
        id="home"
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
        <section>
          <div className="container px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 sm:gap-12 text-center sm:text-left items-center">
            <div className="flex-1">
              <h2 className="font-bold text-4xl max-sm:text-3xl">
                Hello, I'm Vikash
              </h2>
              <div className="w-max mx-auto sm:mx-0">
                <h2 className="font-bold text-3xl max-sm:text-2xl mt-1 gradiant-text">
                  Full Stack Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400 max-w-lg mx-auto sm:mx-0">
                  Passionate about coding and creation, Crafting secure, scalable apps with clean code and real impact — from building robust APIs at GoTrust to launching projects like MockMasters.
                </p>

                <div className="flex items-center justify-center sm:justify-start mt-5">
                  <a
                    href="https://drive.google.com/file/d/1O1iDXsJkTsd_WEVsakMjacy3Lg_MFLzF/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="px-6 py-3 shadow-gray-500 shadow-md bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Download resume
                    </button>
                  </a>

                  <div className="ml-6">
                    <ul className="flex gap-4">
                      <li>
                        <a
                          href="https://github.com/VikashBurman"
                          target="_blank"
                        >
                          <svg
                            className="w-10 h-10 p-2 text-white bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/vikashburman/"
                          target="_blank"
                        >
                          <svg
                            className="w-10 h-10 p-2 text-white bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                              clipRule="evenodd"
                            />
                            <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={Porfile}
                className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full object-cover mx-auto"
              />
            </div>
          </div>
        </section>
        {/* Experience section */}
        <section id="experience">
          <div className="container m-auto px-4 sm:py-10">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2025</h3>
                <h4 className="text-xl font-semibold">Junior Software Developer</h4>
                <p className="text-blue-400 mb-2">GoTrust • April 2025 - Present</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Developed secure RESTful APIs (Keycloak, PostgreSQL, Sequelize) for ROPA and Privacy Policy modules, implementing multi-level data management for 10+ departments, scalable audit logging for 1000+ users, and an intelligent auto-fill system to enhance compliance and operational efficiency.</li>
                  <li>• Automated lifecycle and payroll tracking for 200+ employees via GoEms Employee Management System cron jobs; concurrently optimized 15+ backend APIs, reducing time complexity from O(n^3) to O(n) and O(n^2) to O(n), validated using JMeter/SigNoz.</li>
                </ul>
              </div>
              <div className="pl-24 mt-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <h4 className="text-xl font-semibold">Full Stack Developer Intern</h4>
                <p className="text-blue-400 mb-2">ShaliniVirtuals • Jun 2024 - Aug 2024</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Redesigned and developed company website using Next.js, migrating from HTML/CSS/JS/Bootstrap, resulting in 40% improved performance and user experience.</li>
                  <li>• Implemented client testimonials section by integrating LinkedIn reviews to enhance credibility, user trust, and search engine visibility through SEO best practices.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-10">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-[13rem] object-cover" />
                <h3 className="text-2xl font-semibold mt-8">MockMasters</h3>
                <p className="text-gray-400 text-sm mt-2">
                  MockMasters is a full-stack exam preparation platform designed
                  to help students prepare for NIMCET and core subjects. Built
                  with React, Node.js, and MongoDB, it features a user-friendly
                  interface for practicing mock exams, tracking progress, and
                  enhancing learning with real-time performance analytics.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://mockmasters.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a
                      href="https://github.com/VikashBurman/MockMasters-Frontend/tree/main"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-[13rem] object-cover" />
                <h3 className="text-2xl font-semibold mt-8">DailyBiz</h3>
                <p className="text-gray-400 text-sm mt-2">
                  DailyBiz is a dynamic content management platform that allows
                  users to create, edit, and share personal articles with ease.
                  Built using React, Node.js, and MongoDB, it features real-time
                  text editing, file uploads, and a responsive design for
                  seamless interaction across devices.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://dailybiz.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
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
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-[13rem] object-cover" />
                <h3 className="text-2xl font-semibold mt-8">ShaliniVirtuals</h3>
                <p className="text-gray-400 text-sm mt-2">
                  ShaliniVirtuals is a modern recruitment agency website built
                  with Next.js, replacing the outdated version with a more
                  intuitive and responsive design. The site provides a smooth
                  user experience for job seekers and employers, featuring job
                  listings, applications, and seamless navigation.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://www.shalinivirtuals.com/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a
                      href="https://github.com/VikashBurman/shaliniV"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-[13rem] object-cover" />
                <h3 className="text-2xl font-semibold mt-8">QuickMatch</h3>
                <p className="text-gray-400 text-sm mt-2">
                  QuickMatch is a dating app enabling users to send connection requests, accept/reject them, and engage with others through a dynamic feed. Built with MongoDB, Express, React, Node.js, and Redux, it features JWT authentication, API & schema validation, pagination, and efficient state management for a smooth user experience.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a
                      href="https://github.com/VikashBurman/QuickMatch-Backend"
                      target="_blank"
                    >
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
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
            <h2 className="text-2xl font-semibold">Technologies and skills</h2>
            <div className="flex flex-wrap gap-4 sm:gap-8 mt-12 w-full sm:w-[80%]">
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  C/C++
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Java
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  JavaScript
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  HTML/CSS
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Tailwind CSS
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  React.js
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Next.js
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Redux
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Node.js
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Express.js
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  MongoDB
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  MySQL
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  PostgreSQL
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  RESTful API
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Git/GitHub
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  Postman
                </p>
              </div>
              <div class="w-1/2 sm:w-1/6 flex items-center">
                <p class="font-bold flex items-center gap-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full">
                  JMeter
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8" id="about">
          <div className="container m-auto px-4 space-y-10">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2025</h3>
                <p>Master of Computer Applications (MCA)</p>
                <p>NIT Jamshedpur, Jharkhand</p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>Bachelor of Computer Applications (BCA)</p>
                <p>Kurukshetra University, Kurukshetra</p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>Higher Secondary Education (12th)</p>
                <p>SMB Gita Sr. Sec. School,Kurukshetra</p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
                <p> Secondary Education (10th)</p>
                <p>MNB Gita Niketan Vidya Mandir, Kurukshetra</p>
              </div>
              {/* <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
                </p>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="container mt-20 flex items-center justify-center px-4 py-6 ">
          <div className="py-8 lg:py-4 max-sm:py-4 px-4 mx-auto max-w-screen-sm border border-white rounded-lg ">
            <h2 className="mb-3 text-3xl max-sm:text-2xl tracking-tight font-normal text-center">
              Contact Me
            </h2>
            <p className="mb-8 lg:mb-8 font-light text-center sm:text-xl">
            Feel free to connect via vikashburman.info@gmail.com or submit your message using the contact form
            </p>
            <form
              action="#"
              ref={form}
              onSubmit={sendEmail}
              className="space-y-8"
            >
              <div>
                {/* <label for="email" className="block mb-2 text-sm font-medium">Your email</label> */}
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  id="email"
                  onChange={handleEmailChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="Your Email "
                  required
                />
              </div>
              <div className="sm:col-span-2">
                {/* <label for="message" className="block mb-2 text-sm font-medium ">Your message</label> */}
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border  "
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                // onClick={notify}
                className="flex-1 text-sm py-3 px-7 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="text-gray-300 text-sm text-center mt-10 mb-5">
            {" "}
            @2025 Made by Vikash Burman.
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







