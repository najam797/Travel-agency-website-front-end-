import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-links">
        {/* 🔴 Replace # with your own social media profile links */}
        <a href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook fa-4x"></i>
        </a>
        <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter fa-4x"></i>
        </a>
        <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram fa-4x"></i>
        </a>
      </div>
      <p>World Travel &copy; 2020, All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
