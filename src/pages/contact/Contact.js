import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.scss";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Register ScrollTrigger for GSAP
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const contactRefs = useRef([]);

  // GSAP animation for the contact form elements
  useLayoutEffect(() => {
    const inputs = formRef.current.querySelectorAll(
      "input, textarea, button, .icon"
    );
    gsap.fromTo(
      inputs,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2, // Adds a delay between each input/element
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%", // Start animation when the form is 80% in the viewport
        },
      }
    );

    gsap.fromTo(
      contactRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3, // Adds a delay between each element in the right section
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRefs.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  //

  //

  return (
    <div className="contact-parent parent" id="contact">
      <div className="contact-container cont">
        <div className="contact-left">
          <form ref={formRef} action="">
            <input type="text" name="Name" placeholder="Your name *" required />
            <input type="email" name="Email" placeholder="Email *" required />
            <input
              type="text"
              name="Contact"
              placeholder="Contact number *"
              required
            />
            <textarea name="Message" placeholder="How can I help?" />
            <div className="button-box">
              <button className="submit-btn" type="submit">
                contact
              </button>
              <div className="contact-icon-box">
                <a target="__blank" className="linkedin icon">
                  <RiLinkedinLine />
                </a>
                <a target="__blank" className="facebook icon">
                  <RiFacebookLine />
                </a>
                <a target="__blank" className="instagram icon">
                  <FaInstagram />
                </a>
                <a
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="whatsapp icon"
                >
                  <FaWhatsapp />
                </a>
                <a target="__blank" className="whatsapp icon">
                  <FaGithub />
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <h2
            className="contact-right-title title1"
            ref={(el) => (contactRefs.current[0] = el)}
          >
            Let's <span className="outlined-text">connect</span> <br /> & create
            something <span className="boldtext ">exceptional</span>
            {/* Let’s connect and create something exceptional */}
          </h2>
          <p
            className="contact-description"
            ref={(el) => (contactRefs.current[1] = el)}
          >
            I’m passionate about creating innovative digital solutions and would
            love to hear from you. Whether you have a project in mind or need
            expert advice, let's connect. Reach out for inquiries,
            collaborations, or partnerships. Together, we’ll create something
            exceptional.
          </p>
          <a
            href="mailto:mdzaigham27@gmail.com"
            className="contact-email handle-detail"
            ref={(el) => (contactRefs.current[2] = el)}
          >
            <span>
              Ketandudka566123@gmail.com
            </span>
          </a>
          <a
            href="tel:+918210272603"
            className="contact-number handle-detail"
            ref={(el) => (contactRefs.current[3] = el)}
          >
            +91 7028997574
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
