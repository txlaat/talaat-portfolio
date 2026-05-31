"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A Frontend Developer",
        "Building Responsive Websites",
        "Making Modern Designs",
        "A UI Designer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-flex">
          <div className="hero-text">
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              Available for hire
            </div>

            <h3>
              Hello, I'm <span className="highlight">Abdulrahman Talaat</span>
            </h3>

            <h1>
              I am <span className="multiple-text" ref={el}></span>
            </h1>

            <p>
              Passionate Front-End Developer with a keen eye for UI details. I
              specialize in crafting responsive, interactive websites using
              modern technologies, transforming creative concepts into seamless
              digital experiences.
            </p>

            <div className="social-media">
              <a target="_blank" href="http://www.linkedin.com/in/txlvvt">
                <i className="fab fa-linkedin"></i>
              </a>
              <a target="_blank" href="https://github.com/txlaat">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:abdulrahmanhashad@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-img">
            <img src="/assets/images/me3.jpeg" alt="Abdulrahman Talaat" />
          </div>
        </div>
      </div>
    </section>
  );
}
