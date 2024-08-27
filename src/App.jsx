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
        publicKey: "qbvxNPegBL5NhgFg2",
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
                  VikashBurman
                </h1>
              </a>
            </div>
            <div>
              <ul className="flex gap-5">
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
                    href="#technologies"
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
          <div className="container  px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left  ">
            <div>
              <h2 className="font-bold text-4xl max-sm:text-3xl">
                Hello, I'm Vikash Burman
              </h2>
              <div className="w-max">
                <h2 className="font-bold max-sm:hidden text-3xl max-sm:text-2xl mt-1 gradiant-text">
                  MERN Stack Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400 ">
                  Passionate about coding and creation, I’ve developed
                  full-stack applications and honed my programming skills across
                  multiple platforms and languages.
                </p>

                <div className=" flex items-center max-sm:justify-center mt-5">
                  <a
                    href="https://drive.google.com/file/d/1AeMSCBkn6sVEe7WihjlDMId1Kg32l-Qg/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="px-4 shadow-gray-500 shadow-md py-4 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Download resume
                    </button>
                  </a>

                  <div className="ml-6">
                    <ul className="flex gap-4 ">
                      <li className="">
                        <a
                          href="https://github.com/VikashBurman"
                          target="_blank"
                        >
                          <svg
                            className="w-9 h-9  text-white bg-gradient-to-t from-blue-500 rounded-full to-cyan-500  hover:from-blue-700 hover:to-cyan-700 "
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
                          href="https://www.linkedin.com/in/vikash-burman-33517824a/"
                          target="_blank"
                        >
                          <svg
                            className="w-9 h-9 text-white bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
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
            <div className="relative">
              {/* <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10"> */}
              <img
                src={Porfile}
                className="relative z-10 w-[280px] m-auto sm:w-[500px] rounded-full   "
              />
              {/* </div> */}
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-10">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-[13rem]" />
                <h3 className="text-2xl font-semibold mt-8">MockMasters</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed Mockmasters with MongoDB, Express.js, React, and
                  Node.js, incorporating additional technologies for a
                  well-rounded MERN stack application.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://www.mockmasters.live/" target="_blank">
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
                <img src={Project4} className="w-full h-[13rem] " />
                <h3 className="text-2xl font-semibold mt-8">BlogApp</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Built BlogPost, a dynamic blogging web application where users
                  can read, write, and edit posts, featuring a user friendly
                  interface for content creation and management.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a
                      href="https://dailybiz.vercel.app/"
                      target="_blank"
                    >
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
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-[13rem]" />
                <h3 className="text-2xl font-semibold mt-8">ShaliniVirtuals</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Designed and built ShaliniVirtuals with a dynamic
                  React-powered front-end and an aesthetically pleasing user
                  interface achieved through Tailwind CSS, elevating the overall
                  user experience.
                </p>
                <div className="flex gap-2 mt-12">
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
                <img src={Project2} className="w-full h-[13rem]" />
                <h3 className="text-2xl font-semibold mt-8">
                  Food Ordering App
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed a React-based food ordering app with Firebase
                  backend, CSS styling, and JavaScript functionality, ensuring a
                  dynamic and user-friendly experience.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a
                      href="https://react-food-app-omega.vercel.app/"
                      target="_blank"
                    >
                      Live preview
                    </a>
                  </button>

                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a
                      href="https://github.com/VikashBurman/React-Food-App"
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
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
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
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git/Github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  OOPs
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Express.js
                </p>
              </div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Programming
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MySql
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MongoDB
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </section>
        <section className="py-8" id="about">
          <div className="container m-auto px-4 space-y-10">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2025</h3>
                <p>Master of Computer Application (MCA)</p>
                <p>NIT Jamshedpur, Jharkhand</p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>Bachelor of Computer Application (BCA)</p>
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
              Please contact me at vikasburman37@gmail.com or through this form.
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
            @2024 VikashBurman. All rights reserved.
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
