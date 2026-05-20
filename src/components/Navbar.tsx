import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`top-header ${scrolled ? 'scrolled' : ''}`}>
      <header>
        <div className="name">Paul Rodriguez</div>
        <nav className="navbar">
          <ul>
            <li><a href="#about-section">About</a></li>
            <li><a href="#projects-section">Projects</a></li>
            <li><a href="#skills-section">Skills</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;