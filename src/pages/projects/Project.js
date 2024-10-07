import React from "react";
import "./Project.scss";
import firstImage from "../../assets/e-com.webp";
const Project = () => {
  const projects = [
    {
      image: firstImage,
      title: "E-commerce Web Application",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },
    {
      image: firstImage,
      title: "E-commerce Web Application",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },
    {
      image: firstImage,
      title: "E-commerce Web Application",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },
  ];
  return (
    <>
      <div className="project-parent parent" id="projects" >
        <div className="heading-cont cont">
         <h2 className="title" style={{color:"black"}}  >
            My <span className="strong">
            Project
            </span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
