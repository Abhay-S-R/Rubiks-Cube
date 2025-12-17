import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>CUBIX</h3>
            <p>Solving puzzles, one layer at a time.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CUBIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
