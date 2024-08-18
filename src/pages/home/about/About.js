import React, { useEffect, useState } from "react";
import "../about/about.scss";
import aboutImg from "../../../assets/about-image.png";
import Cursor from "../../../cursor/Cursor";
const About = () => {
  const softwareUsed = [
    {
      title: "Photoshop",
      bar: 80,
    },
    
    {
      title: "illustrator",
      bar: 80,
    },
    {
      title: "after effect",
      bar: 80,
    },
   
    {
      title: "premier pro",
      bar: 80,
    },
    {
      title: "nuke",
      bar: 80,
    },
    {
      title: "maya",
      bar: 70,
    },
    {
      title: "max",
      bar: 70,
    },
    {
      title: "silhoutte",
      bar: 80,
    },
  ];
  const programmeskillsList = [
    {
      title: "html",
      bar: 80,
    },
    
    {
      title: "css",
      bar: 90,
    },
    {
      title: "javascript",
      bar: 60,
    },
   
    {
      title: "react Js",
      bar: 50,
    },
    {
      title: "angular",
      bar: 50,
    },
    {
      title: "node js",
      bar: 50,
    },
    {
      title: "mongodb",
      bar: 50,
    },
    {
      title: "bootstrap",
      bar: 80,
    },
  ];
  return (
    <>
      <div className="about-section-parent parent" id="about">
        <div className="about-section-cont cont">
          {/* <div className="left bg-img-cover"></div> */}
          <div className="left">
            <img src={aboutImg} className="aboutimg" alt="" />
          </div>
          <div className="right">
            <div className="top">
              <h3>About Me</h3>
              <div className="line"></div>
            </div>
            <div className="about-me">
              <p className="about-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                sed nemo id provident quidem libero, modi fuga quos architecto,
                ea velit iure rem alias quibusdam. Culpa tenetur, non ducimus
                nesciunt quidem doloremque quasi temporibus dolorum facilis
                totam molestiae nisi ex expedita suscipit porro officia enim
                voluptate cumque, error quaerat amet?
              </p>
              <div className="sections">
                <table className="w-full">
                  <tr className="p-4">
                    <td className="bold text-white p-2">Name :</td>
                    <td className="text-gray-300 font-light">Ketan Dudka</td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Study :</td>
                    <td className="text-gray-300 font-light text-left">
                      SavitriBai Phule Pune Univercity
                    </td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Degree :</td>
                    <td className="text-gray-300 font-light text-left">
                      Bachelor Of Commerce
                    </td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Diploma Courses :</td>
                    <td className="text-gray-300 font-light text-left">
                      Vfx & Animation & Full Stack Developer
                    </td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Mail :</td>
                    <td className="text-gray-300 font-light text-left">
                      Ketandudka566123@gmail.com
                    </td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Contact :</td>
                    <td className="text-gray-300 font-light text-left">
                      7028997574
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

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
        </div>
        <div className="skills-cont cont">
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
        </div>
      </div>
      <div className="work-process">
        
      </div>
    </>
  );
};

export default About;
