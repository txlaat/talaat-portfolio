export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-scroll from-top">
          The <span className="highlight">Projects</span>
        </h2>

        <div className="projects-container">
          <div className="project-card coming-soon animate-scroll from-bottom">
            <div className="card-inner">
              <div className="icon-box">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Something Awesome is Brewing!</h3>
              <p>
                I am currently working on some exciting projects. Stay tuned to
                see my creative coding in action very soon.
              </p>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
