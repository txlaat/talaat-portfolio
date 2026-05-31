export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title animate-scroll from-top">
          Let's <span className="highlight">Connect</span>
        </h2>

        <p className="contact-subtitle animate-scroll from-top">
          Have a project in mind or want to discuss opportunities? <br />
          I'm always open to talking about creative ideas and new projects.
        </p>

        <div className="contact-grid">
          <div className="contact-card animate-scroll from-left">
            <div className="icon-box">
              <i className="fas fa-envelope"></i>
            </div>
            <h4>Email Me</h4>
            <p>abdulrahmanhashad@gmail.com</p>
            <a href="mailto:abdulrahmanhashad@gmail.com" className="card-link">
              Send Email <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="contact-card animate-scroll from-bottom"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4>Location</h4>
            <p>Alexandria, Egypt</p>
            <span className="card-link">
              View Map <i className="fas fa-arrow-right"></i>
            </span>
          </div>

          <div
            className="contact-card animate-scroll from-right"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="icon-box">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h4>Let's Chat</h4>
            <p>+20 1227455469</p>
            <a
              href="https://wa.me/+201227455469"
              target="_blank"
              className="card-link"
            >
              Message Me <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div
          className="contact-footer animate-scroll from-bottom"
          style={{ transitionDelay: "0.6s" }}
        >
          <a href="mailto:abdulrahmanhashad@gmail.com" className="main-cta-btn">
            Start a Conversation <i className="fas fa-paper-plane"></i>
          </a>

          <div className="footer-socials">
            <a href="https://github.com/txlaat">
              <i className="fab fa-github"></i>
            </a>
            <a href="http://www.linkedin.com/in/txlvvt">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/txlvvt/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <p className="copyright">
            © 2026 Abdulrahman Talaat. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
