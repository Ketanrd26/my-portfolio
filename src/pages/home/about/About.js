import React, { useEffect, useState } from "react";
import "../about/about.scss";
import "@lottiefiles/lottie-player";

// icons

import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiAutodeskmaya } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobeaftereffects } from "react-icons/si";
const About = () => {
  const skill = [
    {
      icon: <FaGithub />,
      title: "github",
    },
    {
      icon: <SiJavascript />,
      title: "Javascript",
    },
    {
      icon: <FaHtml5 />,
      title: "html",
    },
    {
      icon: <FaSass />,
      title: "sass",
    },
    {
      icon: <RiNodejsLine />,
      title: "Node js",
    },
    {
      icon: <SiMongodb />,
      title: "Mongodb",
    },
    {
      icon: <GrMysql />,
      title: "My Sql",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
    },
    {
      icon: <SiAdobeaftereffects />,
      title: "After effects",
    },
    {
      icon: <SiAdobephotoshop />,
      title: "Photoshop",
    },
  ];
  return (
    <>
      <div className="about-section-parent parent blackCursor" id="about">
        <div className="about-section-cont cont">
          {/* <div className="left bg-img-cover"></div> */}
          <div className="left">
            <div className="aboutimg bg-img-contain"></div>
          </div>
          <div className="right">
            <div className="top">
              <h3>About Me</h3>
              <div className="line"></div>
            </div>
            <div className="about-me">
              <p className="about-para">
                I believe in the power of collaboration and continuous learning,
                which drives me to stay updated with the latest trends and
                technologies in both VFX and web development. Whether it's
                designing immersive 3D environments, optimizing user interfaces,
                or implementing complex functionalities, I approach every
                project with meticulous attention to detail and a commitment to
                excellence.
              </p>
              <div className="sections">
                <table className="w-full">
                  <tr className="p-4">
                    <td className="bold text-black p-2">Name :</td>
                    <td className="text-gray-500 font-light">Ketan Dudka</td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-black p-2">Education :</td>
                    <td className="text-gray-500 font-light text-left">
                      SavitriBai Phule Pune Univercity
                    </td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-black p-2">Degree :</td>
                    <td className="text-gray-500 font-light text-left">
                      Bachelor Of Commerce
                    </td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-black p-2">Specialization:</td>
                    <td className="text-gray-500 font-light text-left">
                      Vfx & Animation & Full Stack Developer
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="skills-cont cont">
          <h4>Development Skills</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ad
            repudiandae aspernatur beatae cumque.
          </p>
          <div className="skill-list">
        
              {
                programmeskillsList.map((item)=>(
                  <div className="list-item">
                <p>{item.title}</p>
                <div className="preogressbar">
                  <div className="bar" style={{width: `${item.bar}%`}}></div>
                </div>
              </div>
                ))
              }
         
          </div>
        </div> */}
        {/* <div className="skills-cont cont">
          <h4>Vfx Skills</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ad
            repudiandae aspernatur beatae cumque.
          </p>
          <div className="skill-list">
        
              {
                softwareUsed.map((item)=>(
                  <div className="list-item">
                <p>{item.title}</p>
                <div className="preogressbar">
                  <div className="bar" style={{width: `${item.bar}%`}}></div>
                </div>
              </div>
                ))
              }
         
          </div>
        </div> */}
      </div>
      <div className="skill-process parent">
        <div className="skill-cont cont">
          <div className="heading">
            <h3>
              My <span className="strong">Skills</span>
            </h3>
          </div>

          <div className="skils">
            {skill.map((item, index) => (
              <div className="skill" key={index}>
                <div className="icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
