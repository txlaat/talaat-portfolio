"use client";

import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
  images: string[];
}

const projectsData: Project[] = [
  {
    title: "MotoVroom Shop",
    description: "A high-end, responsive ecommerce platform for motorcycle enthusiasts. Features dynamic product listings, a sleek shopping cart, and a modern UI.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveLink: "https://motovroom-shop.vercel.app",
    githubLink: "https://github.com/txlaat",
    images: [
      "/assets/images/projects/motovroom/1.png",
      "/assets/images/projects/motovroom/2.png",
      "/assets/images/projects/motovroom/3.png",
    ],
  },
  {
    title: "EgyTour",
    description: "Discover the wonders of ancient Egypt. A modern, interactive travel guide to exploring the pyramids, cruising the Nile, and uncovering 5,000 years of history.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveLink: "https://egy-tour-two.vercel.app/",
    githubLink: "https://github.com/txlaat", // Assuming same GitHub profile
    images: [
      "/assets/images/projects/egytour/1.png",
      "/assets/images/projects/egytour/2.png",
      "/assets/images/projects/egytour/3.png",
      "/assets/images/projects/egytour/4.png",
      "/assets/images/projects/egytour/5.png",
    ],
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="new-project-card animate-scroll from-bottom">
      <div className="slider-container">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} Screenshot ${index + 1}`}
            className={`slider-img ${index === currentImg ? "active" : ""}`}
          />
        ))}
        <div className="slider-indicators">
          {project.images.map((_, index) => (
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
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="proj-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="proj-tag">{tag}</span>
          ))}
        </div>

        <div className="proj-links">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="proj-btn primary">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="proj-btn secondary">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-scroll from-top">
          The <span className="highlight">Projects</span>
        </h2>

        <div className="projects-container">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
