import React, { useState } from "react";
import "./Project.scss";
import firstImage from "../../assets/e-com.webp";
import website from "../../assets/website.jpg";
import { FiExternalLink } from "react-icons/fi";
const Project = () => {
  const projects = [
    {
      image: firstImage,
      title: "E-commerce Web Application",
      description:
        "This project showcases a fully functional e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application provides a seamless shopping experience, enabling users to browse products, add items to their cart, and complete purchases effortlessly. ",
    },
    {
      image: website,
      title: "website",
      description:
        "This project features a visually stunning portfolio website designed for a tattoo artist, showcasing their unique artistry and styles. Built with modern web technologies, the site serves as an online gallery where potential clients can explore the artist's work, book appointments, and learn more about the tattooing process.",
    },
    // {
    //   image: firstImage,
    //   title: "E-commerce Web Application",
    //   description:
    //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    // },
  ];




  return (
    <>
      <div className="project-parent parent" id="projects">
        <div className="heading-cont cont">
          <h2 className="title" style={{ color: "black" }}>
            My <span className="strong">Projects</span>
          </h2>
        </div>
        <div className="project-cont cont">
          {projects.map((item, index) => (
            <div className="firstProject">
              <div
                className="image bg-img-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="right">
                <div className="project-title">
                  <h4>{item.title}</h4>
                </div>
                <div className="desc">
                  <p>{item.description}</p>
                </div>
                <div className="link">
                  <a href="">
                  <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
