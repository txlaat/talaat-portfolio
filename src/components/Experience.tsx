export default function Experience() {
  return (
    <section id="experience" className="resume-section">
      <div className="container">
        <h2 className="section-title animate-scroll from-top">
          Experience & <span className="highlight">Education</span>
        </h2>

        <div className="resume-container">
          <div className="resume-column animate-scroll from-left">
            <h3 className="column-title">
              <i className="fas fa-briefcase"></i> Work Experience
            </h3>

            <div className="resume-box">
              <div className="resume-item">
                <span className="resume-date">2025 - Present</span>
                <h4>Freelance Front-End Developer</h4>
                <span className="resume-place">Remote / Freelance</span>
                <p>
                  Building responsive and interactive websites using HTML, CSS,
                  and JavaScript. Focusing on creating modern UI designs and
                  ensuring cross-browser compatibility.
                </p>
              </div>
            </div>
          </div>

          <div
            className="resume-column animate-scroll from-bottom"
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="column-title">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>

            <div className="resume-box">
              <div className="resume-item">
                <span className="resume-date">2024 - Present</span>
                <h4>Bachelor's in IT</h4>
                <span className="resume-place">
                  Borg El Arab Technological University
                </span>
                <p>
                  Studying Information Technology, specializing in software
                  development, networking, and system analysis.
                </p>
              </div>

              <div className="resume-item">
                <span className="resume-date">2021 - 2024</span>
                <h4>High School Diploma</h4>
                <span className="resume-place">Alexandria, Egypt</span>
                <p>Focus on Mathematics and Physics basics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
