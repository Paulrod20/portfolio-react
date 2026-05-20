function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {year} Paul Rodriguez. Built with React & TypeScript.</p>
      </div>
    </footer>
  );
}

export default Footer;

