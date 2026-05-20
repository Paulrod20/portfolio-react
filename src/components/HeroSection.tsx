function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Paul Rodriguez</h1>
          <p className="hero-tagline">Engineer. Builder. Creator.</p>
          <p className="hero-sub">
            Software engineer building thoughtful experiences for web and mobile.
          </p>
          <div className="hero-ctas">
            <a href="#projects-section" className="btn-primary">View My Work</a>
            <a href="#contact-section" className="btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/paulImage.jpg" alt="Paul Rodriguez" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
