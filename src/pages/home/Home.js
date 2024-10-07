import React, { useEffect, useState } from "react";
import "../home/home.scss";
import About from "./about/About";
import homeImg from "../../assets/photo.png"
import Project from "../projects/Project";
const Home = () => {
  const [showText1, setShowText1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText1(prevShowText1 => !prevShowText1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="home-parent parent">
        <div className="home-cont cont">
          <div className="left">
            <p className="heading">Hi,I'M Ketan</p>
            <div className="position">
              <h3>I'M A</h3>
              <div className="postion-text">  
              
              <div className="swipediv"></div>
             <h3 className="text1" style={{ display: showText1 ? 'block' : 'none' }}>
              WEB/APP
             </h3>
             <h3 className="text1" style={{ display: showText1 ? 'none' : 'block' }} >
      VFX / 3D
             </h3>
       
               
               </div>
              
       
              <h3 className="developer-text">
              <div className="swipediv2"></div>
             <h3 className="text1" style={{ display: showText1 ? 'block' : 'none' }}>
           DEVELOPER
             </h3>
             <h3 className="text1" style={{ display: showText1 ? 'none' : 'block' }} >
ARTIST
             </h3>

              </h3>
            </div>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              minima molestiae atque, magni eius ab.
            </p>
            <a className="btn" href="/my resume for full stack.pdf" download>
              Download resume
            </a>
          </div>
          <div className="right">
            <div className="blur"></div>
            <div className="image bg-img-cover"></div>
     
          </div>
        </div>
      </div>
      {/* about */}
      <About/>

      {/* Projects */}
      <Project/>
    </>
  );
};

export default Home;
