import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";

import profile from "./assets/profile.jpg";
import resume from "./assets/resume.pdf";
// import project1 from "./assets/project1.png";
// import project2 from "./assets/project2.png";
// import project3 from "./assets/project3.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const form = useRef();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x6uigbc",
        "template_3eb4ibq",
        form.current,
        'LWi0ZOvLI4_qRfJFp'
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Status:", error.status);
        console.log("Text:", error.text);
        console.log("Full Error:", error);
      });
  };

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio website built with React and Tailwind CSS.",
    },
    {
      title: "E-commerce Website",
      desc: "Full stack e-commerce application.",
    },
    {
      title: "Blog App",
      desc: "Blog platform for creating and managing posts.",
    },
  ];

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-6 md:px-10 py-6 fixed w-full top-0 z-50 ${darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        <h1 className="text-2xl font-bold">Prince</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize ${activeSection === item
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : ""
                  }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-4 py-2 rounded-lg"
          >
            {darkMode ? "☀" : "🌙"}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden fixed top-20 w-full p-6 ${darkMode ? "bg-black" : "bg-white"
            }`}
        >
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block py-3 capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-bold">Prince Jha</h2>

          <div className="text-2xl mt-4 text-gray-400">
            <TypeAnimation
              sequence={[
                "I am MERN Developer",
                1500,
                "I build Full Stack Apps",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="https://github.com/princejha38393-coder"
              className="border px-4 py-2 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prince-jha-83908b33a/?isSelfProfile=true"
              className="border px-4 py-2 rounded-lg"
            >
              LinkedIn
            </a>

            <a
              href="mailto:princejha38393@gmail.com"
              className="border px-4 py-2 rounded-lg"
            >
              Email
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
              Hire Me
            </button>

            <a
              href="#projects"
              className="border px-6 py-3 rounded-lg font-semibold"
            >
              View Projects
            </a>

            <a
              href={resume}
              download="Prince_Jha_Resume.pdf"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-10 md:mt-0"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About */}
      <section id="about" className="py-20 px-10">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-gray-400">
            Hello, I am <span className="font-bold text-white">Prince Jha</span>, a
            passionate MERN Stack Developer. I build modern, responsive, and scalable
            web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>

          <p className="text-lg leading-8 text-gray-400 mt-6">
            I have experience in frontend and backend development, API integration,
            authentication, database management, and deployment.
          </p>

          <p className="text-lg leading-8 text-gray-400 mt-6">
            My goal is to become a professional Full Stack Developer and build
            high-quality real-world applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-10">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>

        <div className="space-y-6 max-w-2xl">
          {[
            { skill: "HTML", level: "95%" },
            { skill: "CSS", level: "90%" },
            { skill: "JavaScript", level: "85%" },
            { skill: "React.js", level: "90%" },
            { skill: "Node.js", level: "80%" },
            { skill: "MongoDB", level: "75%" },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{item.skill}</span>
                <span>{item.level}</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-white h-4 rounded-full"
                  style={{ width: item.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-10">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border p-6 rounded-lg"
            >


              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4">{project.desc}</p>

              <div className="flex gap-4 mt-6">
                <a href="#" className="border px-4 py-2 rounded-lg">
                  Live Demo
                </a>

                <a href="#" className="border px-4 py-2 rounded-lg">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-10">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 max-w-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white text-black border border-gray-300 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white text-black border border-gray-300 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded-lg bg-white text-black border border-gray-300 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t">
        © 2026 Prince Jha
      </footer>
    </div>
  );
}

export default App;