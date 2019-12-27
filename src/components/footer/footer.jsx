import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <span>All rights reserved &copy; Bojobachkadosta</span>
        <div className="subsribe">
          <p>
            If you like out content, you can give us your email to be informed
            about our events.
          </p>
          <input type="email" placeholder="your email.." />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
