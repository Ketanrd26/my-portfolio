import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Header/header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { FaGripLines } from "react-icons/fa";
// icon
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
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
      </div>

      <div className="header-mob-menu">
        <div className="name">Ketan R D</div>

        <div className="right">
          <a className="btn2" href="/my resume for full stack.pdf" download>
           Resume
          </a>

          <div className="hamburger" onClick={() => setMobNav(!mobNav)}>
          {
            !mobNav ?   <FaGripLines />
            :
            <GiTireIronCross />
          }
          </div>
        </div>

        <div className={mobNav ? "mobnav-list active" : "mobnav-list"}>
          <div className="top">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Us</a>
            <a href="#about">About Us</a>
          </div>
          <div className="contact-icon-box">
            <a
              target="__blank"
              className="linkedin icon"
              href="https://www.linkedin.com/in/ketan-dudka-a72756299"
            >
              <RiLinkedinLine />
            </a>
            <a
              target="__blank"
              href="https://www.facebook.com/ketan.dudka.9"
              className="facebook icon"
            >
              <RiFacebookLine />
            </a>
            <a
              target="__blank"
              href="https://www.instagram.com/_ketan_rd_26/profilecard/?igsh=MzI0ZXV3dGx4emtl"
              className="instagram icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+917028997574"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice
              className="whatsapp icon"
            >
              <FaWhatsapp />
            </a>
            <a
              target="__blank"
              className="whatsapp icon"
              href="https://github.com/Ketanrd26"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
