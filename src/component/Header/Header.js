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

  const [mobNav , setMobNav] = useState(false)
  return (
    <>
      <div className="headear-parent parent">
        <div className={header ? "header-menu active" : "header-menu"}>
          <div className="top">
          <a href="#home" className="img" >
            <img src={logo} alt="" />
            </a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Us</a>
            <a href="#about">About Us</a>
          </div>
          <div className="sociaL-icons">
            <Link>
            <FaInstagram />
            </Link>
            <Link>
            <FiLinkedin />
            </Link>
            <Link>
            <FiGithub />
            </Link>
            <Link>
            <IoCallOutline />
            </Link>
          </div>
        </div>

        <div className={mobNav ? "header-mob-menu mobnavActive" : "header-mob-menu"}>
          <div className="top">
            <a href="#home" className="img" >
            <img src={logo} alt="" onClick={()=>setMobNav(!mobNav)} />
            </a>
            <a href="#projects">Projects</a>
            <Link href="">Contact Us</Link>
            <a href="#about">About Us</a>
          </div>
          <div className="sociaL-icons">
            <Link>
            <FaInstagram />
            </Link>
            <Link>
            <FiLinkedin />
            </Link>
            <Link>
            <FiGithub />
            </Link>
            <Link>
            <IoCallOutline />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
