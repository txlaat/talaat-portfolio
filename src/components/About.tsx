export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title animate-scroll from-top">
          About <span className="highlight">Me</span>
        </h2>

        <div className="about-container">
          <div className="about-card animate-scroll from-left">
            <div className="about-img-box">
              <img src="/assets/images/me3.jpeg" alt="Abdulrahman" />
            </div>
            <div className="about-content">
              <h3>
                I'm <span className="highlight">Abdulrahman Talaat</span>
              </h3>
              <h4>Front-End Developer</h4>
              <p>
                I am a dedicated developer with a passion for building
                beautiful, functional, and responsive websites. I combine clean
                code with modern design principles to create digital experiences
                that leave a lasting impression. Always eager to learn new
                technologies and take on new challenges.
              </p>
            </div>
          </div>

          <div className="info-grid">
            <div
              className="info-card animate-scroll from-bottom"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="icon-box">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>abdulrahmanhashad@gmail.com</p>
            </div>

            <div
              className="info-card animate-scroll from-bottom"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="icon-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p>Alexandria, Egypt</p>
            </div>

            <div
              className="info-card animate-scroll from-bottom"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="icon-box">
                <i className="fas fa-check-circle"></i>
              </div>
              <h4>Availability</h4>
              <p>Available for Freelance</p>
            </div>

            <div
              className="info-card animate-scroll from-bottom"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="icon-box">
                <i className="fas fa-code"></i>
              </div>
              <h4>Experience</h4>
              <p>+2 Years</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="separator animate-scroll from-bottom"
          style={{ transitionDelay: "0.5s" }}
        ></div>

        <div
          className="tech-stack-container animate-scroll from-bottom"
          style={{ transitionDelay: "0.6s" }}
        >
          <h3 className="subsection-title">
            My Tech <span className="highlight">Stack</span>
          </h3>

          <div className="skills-wrapper">
            <div className="skill-category">
              <h4>Frameworks & Languages</h4>
              <div className="tags-container">
                <span className="tech-tag">
                  <i className="fab fa-react"></i> Next.js
                </span>
                <span className="tech-tag">
                  <i className="fab fa-js"></i> TypeScript
                </span>
                <span className="tech-tag">
                  <i className="fab fa-react"></i> React.js
                </span>
                <span className="tech-tag">
                  <i className="fab fa-node-js"></i> Node.js
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Styling & Animations</h4>
              <div className="tags-container">
                <span className="tech-tag">
                  <i className="fas fa-paint-brush"></i> Tailwind CSS
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> Framer Motion
                </span>
                <span className="tech-tag">
                  <i className="fab fa-css3-alt"></i> Modern CSS
                </span>
                <span className="tech-tag">
                  <i className="fas fa-layer-group"></i> UI/UX Design
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Tools & Environment</h4>
              <div className="tags-container">
                <span className="tech-tag">
                  <i className="fas fa-terminal"></i> VS Code
                </span>
                <span className="tech-tag">
                  <i className="fab fa-github"></i> Git & GitHub
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cloud"></i> Vercel
                </span>
                <span className="tech-tag">
                  <i className="fas fa-code-branch"></i> CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="workflow-container animate-scroll from-bottom"
          style={{ transitionDelay: "0.7s" }}
        >
          <h3 className="subsection-title">
            How I <span className="highlight">Work</span>
          </h3>

          <div className="workflow-grid">
            <div className="workflow-item">
              <div className="step-num">01</div>
              <h5>Responsive First</h5>
              <p>
                Making sure websites look perfect on all devices, from mobiles
                to large screens.
              </p>
            </div>
            <div className="workflow-item">
              <div className="step-num">02</div>
              <h5>Clean Code</h5>
              <p>
                Writing organized and readable code that is easy to maintain and
                scale.
              </p>
            </div>
            <div className="workflow-item">
              <div className="step-num">03</div>
              <h5>Modern Design</h5>
              <p>
                Focusing on UI aesthetics, smooth animations, and user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
