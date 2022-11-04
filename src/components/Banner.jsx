/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/iam.jpeg" alt="Geetu" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Geeta Sharma</h6>
            <h3>Front End Developer</h3>
            <p>
            Hi, I'm Geeta Sharma, and I graduated from the Navgurukul
            in 2022 with a degree in Software Programming. My interests are in Front 
            End Engineering, and I love to create beautiful and performant products 
            with delightful user experiences.

            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
