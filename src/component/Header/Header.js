import React from "react";
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
  return (
    <>
      <div className="headear-parent parent">
        <div className="header-menu">
          <div className="top">
            <img src={logo} alt="" />
            <Link href="#about">Projects</Link>
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
