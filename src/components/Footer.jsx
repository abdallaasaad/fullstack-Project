import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>CampusRent</h3>
          <p>Connecting students with the perfect apartment near campus.</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <span>🌐</span>
          <span>📘</span>
          <span>🐦</span>
          <span>📸</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CampusRent. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
