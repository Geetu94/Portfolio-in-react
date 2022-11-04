import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "UI Design focuses on anticipating what users might need to do and ensuring that the interface has elements that are easy to access, understand, and use to facilitate those actions.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "The process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market.      ",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "The term branding refers to a business and marketing concept that helps people identify a particular company, product, or individual.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>01</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>30+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>8</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
