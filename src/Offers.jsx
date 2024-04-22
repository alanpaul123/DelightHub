import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Offers() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="offers" id="offers">
        <div
          className="off"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>DAILY OFFERS</p>
          <p>
            Enjoy your daily snacks for the best prices. <br />
            You will be delightened
          </p>
          <button className="obName">Learn More</button>
        </div>
      </div>
      <div
        className="word"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="wordT">
          <p>Best snacks and Donuts For you</p>
          <h1>Cups of cuteness</h1>
          <p>
            provides patrons with a place to congregate, talk, read, write,
            entertain one another,
            <br /> or pass the time, whether individually or in small groups.
          </p>
        </div>
      </div>
    </>
  );
}

export default Offers;
