import React, { useEffect, useState } from "react";
import "../Header/header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

// icon
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobNav, setMobNav] = useState(false);
  return (
    <>
      <div className="headear-parent parent">
        <div className={header ? "header-menu active" : "header-menu"}>
          <div className="top">
            <a href="#home" className="img">
              <img src={logo} alt="" />
            </a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Us</a>
            <a href="#about">About Us</a>
          </div>
          <div className="sociaL-icons">
            <a href="https://wa.me/+917028997574">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/ketan-dudka-a72756299/"
              target="blank"
            >
              <FiLinkedin />
            </a>
            <a href="https://github.com/Ketanrd26" target=" blank">
              <FiGithub />
            </a>
            <a href="tel:+917028997574" target="blank">
              <IoCallOutline />
            </a>
          </div>
        </div>

        <div
          className={
            mobNav ? "header-mob-menu mobnavActive" : "header-mob-menu"
          }
        >
          <div className="top">
            <a href="#home" className="img" onClick={() => setMobNav(!mobNav)}>
              <img src={logo} alt="" />
            </a>
            <a href="#projects">Projects</a>
            <Link href="">Contact Us</Link>
            <a href="#about">About Us</a>
          </div>
          <div className="sociaL-icons">
          <a href="https://wa.me/+917028997574"  target="blank">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/ketan-dudka-a72756299/"
              target="blank"
            >
              <FiLinkedin />
            </a>
            <a href="https://github.com/Ketanrd26" target=" blank">
              <FiGithub />
            </a>
            <a href="tel:+917028997574" target="blank">
              <IoCallOutline />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
