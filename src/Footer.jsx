import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="birthBox">
        <div
          className="c1"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Birthday Cups</h1>
          <p>
            Another adventure filled year awaits you. Welcome it by celebrating
            your birthday with pomp and splendor. <br /> Wishing you a very
            happy and fun-filled birthday.Celebrate With us.
          </p>

          <button class="cBtn">Order Now</button>
        </div>
      </div>

      <footer>
        <ul>
          <li className="fh">Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

        <ul>
          <li className="fh">Location</li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Kochi,Kerala
          </li>
          <li>+91 4567843</li>
          <li>More Places</li>
        </ul>
        <div className="fooLink">
          <p className="logo  a">DelightHub</p>
          <p className="h">
            Making the world a better <br />
            place one plate at a time. <br />
            Enjoy The best delicasies
            <br />
            with the best prices offered
          </p>

          <div className="socials">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>

        <div className="search">
          <h3>Search Here</h3>

          <div className="sear">
            <input type="text" placeholder="Search any Dish" />
            <i class="fa-solid fa-magnifying-glass faS"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
