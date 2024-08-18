import React from "react";
import "../about/about.scss";
import aboutImg from "../../../assets/about-image.png"
const About = () => {
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
                    <td className="text-gray-300 font-light text-left">SavitriBai Phule Pune Univercity</td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Degree :</td>
                    <td className="text-gray-300 font-light text-left">Bachelor Of Commerce</td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Diploma Courses :</td>
                    <td className="text-gray-300 font-light text-left">Vfx & Animation & Full Stack Developer</td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Mail :</td>
                    <td className="text-gray-300 font-light text-left">Ketandudka566123@gmail.com</td>
                  </tr>
                  <tr className="p-4">
                    <td className="bold text-white p-2">Contact :</td>
                    <td className="text-gray-300 font-light text-left">7028997574</td>
                  </tr>
                
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
