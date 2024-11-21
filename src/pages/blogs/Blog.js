import React from 'react'
import firstImage from "../../assets/blog_img.jpg";

const Blog = () => {
    const blogs = [
        {
          image: firstImage,
          title: "From Non IT to IT My Journey",
          description:
            "I started with a B.Com degree but soon followed my passion for creativity, becoming a VFX artist and completing an animation course. While working in VFX, I grew curious about technology, leading me to enroll in a full-stack development course. The transition was challenging but rewarding, combining my creative background with technical skills. Today, as a full-stack developer, I create web applications, proving that with curiosity and dedication, shifting careers can unlock new opportunities.",
        },
    
       
      ];
  return (
    <>
       <div className="project-parent blog_parent parent" id="projects">
        <div className="heading-cont cont">
          <h2 className="title" style={{ color: "white" }}>
            My <span className="strong">Blogs</span>
          </h2>
        </div>
        <div className="project-cont cont">
          {blogs.map((item, index) => (
            <div className="firstProject" key={index} >
              <div
                className="image bg-img-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="right">
                <div className="project-title">
                  <h4  style={{color:"white"}} >{item.title}</h4>
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
  )
}

export default Blog
