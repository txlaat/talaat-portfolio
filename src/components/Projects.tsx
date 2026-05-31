"use client";

import { useState, useEffect } from "react";

export default function Projects() {
  const images = [
    "/assets/images/projects/motovroom/1.png",
    "/assets/images/projects/motovroom/2.png",
    "/assets/images/projects/motovroom/3.png",
  ];
  
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-scroll from-top">
          The <span className="highlight">Projects</span>
        </h2>

        <div className="projects-container">
          
          <div className="new-project-card animate-scroll from-bottom">
            <div className="slider-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`MotoVroom Screenshot ${index + 1}`}
                  className={`slider-img ${index === currentImg ? "active" : ""}`}
                />
              ))}
              <div className="slider-indicators">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentImg ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImg(index);
                    }}
                  ></span>
                ))}
              </div>
            </div>

            <div className="proj-content">
              <h3>MotoVroom Shop</h3>
              <p>
                A high-end, responsive ecommerce platform for motorcycle enthusiasts. 
                Features dynamic product listings, a sleek shopping cart, and a modern UI.
              </p>
              
              <div className="proj-tags">
                <span className="proj-tag">Next.js</span>
                <span className="proj-tag">React</span>
                <span className="proj-tag">Tailwind CSS</span>
                <span className="proj-tag">TypeScript</span>
              </div>

              <div className="proj-links">
                <a href="https://motovroom-shop.vercel.app" target="_blank" rel="noreferrer" className="proj-btn primary">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="https://github.com/txlaat" target="_blank" rel="noreferrer" className="proj-btn secondary">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
