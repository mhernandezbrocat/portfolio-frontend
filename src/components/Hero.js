import React, { useEffect } from "react";
import "../css/styles.css";
import Html from "../images/html.svg";
import Css from "../images/css3.svg";
import Js from "../images/javascript.svg";
import ReactSvg from "../images/react.svg";
import Angular from "../images/angular.svg";
import { Typewriter } from "react-simple-typewriter";
import pdfFile from "../assets/curriculum.pdf";
import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setShowElement(true);
  }, []);

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    window.open(pdfFile, "_blank");
    link.download = "curriculum-vitae-miguel.dev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: ReactSvg,
      title: "React",
    },
    {
      img: Angular,
      title: "Angular",
    },
  ];

  return (
    <>
      <section
        id="home"
        className={`fade-in ${showElement ? "hero show" : "hero"}`}
      >
        <div className="container">
          <div className="content">
            <motion.div
              className="hero-main"
              initial={{ y: -350 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-text">
                <h1>
                  👋 I'm a
                  <span>
                    <Typewriter
                      words={[
                        "Programmer",
                        "Front Dev",
                        "Engineer",
                        "Coder",
                        "Freelancer",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={110}
                      deleteSpeed={70}
                      delaySpeed={1000}
                      onLoopDone={handleDone}
                    />
                  </span>
                </h1>
                <p>
                  Hi, I'm Miguel Brocat. A passionate Front-end Developer based
                  in Havana, Cuba. 📍
                </p>
                <span>
                  <motion.a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/miguel-luis-hernandez-brocat-428b9a206/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </motion.a>
                  <motion.a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/mhernandezbrocat"
                  >
                    <i className="fa-brands fa-github"></i>
                  </motion.a>
                  <motion.a
                    aria-label="cv"
                    rel="noreferrer"
                    target="_blank"
                    onClick={handleDownload}
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </motion.a>
                </span>
              </div>
              <div className="hero-img"></div>
            </motion.div>
            <motion.div
              className="skills"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" className={icon.title == "React" ? 'react-icon' : ''}/>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
