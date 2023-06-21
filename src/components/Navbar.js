import React, { useEffect, useState } from "react";
import "../css/styles.css";
import { motion } from "framer-motion";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  // const [showElement, setShowElement] = useState(false)

  // useEffect(() => {
  //   setShowElement(true);
  // }, []);

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
        // setShowElement(false);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isSticky ? "header" : "sticky"}>
        <motion.h3
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={pageUp}
          className="logo"
        >
          miguel.dev
        </motion.h3>
        <ul>
          {navlinks.map((item) => (
            <motion.li
              key={item.name}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href={item.link}>{item.name}</a>
            </motion.li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <i className="fa-solid fa-bars-staggered mobile-menu"></i>
          </li>
        </ul>
      </nav>
      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
