import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Nav() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mainHero">
      <div className="header">
        <p className="logo">DelightHub</p>

        <input type="checkbox" id="check" />
        <label for="check" className="icons">
          <i className="fa-solid fa-x cross"></i>
          <i className="fa-solid fa-bars menu"></i>
        </label>

        <nav>
          <a href="#home">Home</a>
          <a href="#info">About</a>
          <a href="#menu">Menu</a>
          <a href="#dishes">Recipies</a>
          <a href="#offers">Offers</a>
        </nav>
      </div>
      <div
        className="hero"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <p className="p1">Pastel heaven</p>

        <div className="boxBtn">
          <button className="btn-1">Learn More</button>
          <button className="btn-2">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
