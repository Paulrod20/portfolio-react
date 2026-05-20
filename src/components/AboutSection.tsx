function AboutSection() {
  return (
    <section id="about-section" className="about">
      <div className="about-content">
        <h2 className="section-heading">About Me</h2>
        <div className="about-body">
          <p>
            I'm a software engineer based in North Carolina with a passion for
            building clean, thoughtful experiences across web and mobile. I work
            professionally with React and TypeScript, and I'm always building
            something on the side — whether that's a web app, an iOS app, or
            the occasional video game.
          </p>
          <p>
            I transitioned into software engineering through real-world
            experience and a genuine love for the craft. I care about writing
            code that's readable, maintainable, and actually solves problems.
          </p>
        </div>
        <div className="about-links">
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

export default AboutSection;