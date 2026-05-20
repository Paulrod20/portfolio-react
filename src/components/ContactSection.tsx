function ContactSection() {
  return (
    <section id="contact-section" className="contact">
      <div className="contact-content">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="contact-sub">
          Have a question, opportunity, or just want to say hello? My inbox is always open.
        </p>
        <a
          href="mailto:pauldrodriguez20@gmail.com"
          className="btn-primary"
        >
          Send Me an Email
        </a>
        <div className="contact-links">
          <a
            href="https://github.com/Paulrod20"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paul-rodriguez-452640319/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;