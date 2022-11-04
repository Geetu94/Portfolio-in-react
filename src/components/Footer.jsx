/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Geeta Sharma</span>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100069034770039">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCR-hqk4-_WJPnHRLnldas4A">
            <i className="fab fa-youtube"></i>
          </a>
          {/* <a href="#">
            <i className="fab fa-twitter"></i>
          </a> */}
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Geeta Sharma
        </p>
      </div>
    </footer>
  );
}

export default Footer;
