import React from "react";
import Coffee from "./assets/coffee.png";
import Card from "./assets/cardev.png";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Know() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="info" id="info">
        <h1> Know More About Us</h1>
        <div className="bexp">
          <div className="beng" data-aos="zoom-out-left">
            <div className="cexp">
              <h1>
                Here’s to coffee <br /> innovation
              </h1>
              <p>
                Our Coffee is a testament to the future of sustainable <br />{" "}
                coffee with beans that were grown, <br />
                cultivated and processed in responsible ways.
              </p>

              <div className="Kma">
                <button className="km">Know More</button>
              </div>
            </div>
          </div>

          <div className="coffImg" data-aos="zoom-out-right">
            <img src={Coffee} alt="" />
          </div>
        </div>

        <div className="bexp b2">
          <div className="coffImg" data-aos="zoom-in-down">
            <img src={Card} alt="" />
          </div>
          <div
            className="beng"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="cexp">
              <h1>
                We Care about the planet and <br /> Environment
              </h1>
              <p>
                A eGift Card is the perfect way to say
                <br /> "thank you" for a job well done. <br />
                It increases Your Card points
              </p>

              <div className="Kma">
                <button className="km">Know More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bexp b3">
          <div
            className="beng"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="cexp">
              <h1>
                Satisfying and <br />
                Healthy
              </h1>
              <p>
                Grab a hearty Impossible™ Breakfastt <br /> with coffee and
                donut with reduced <br /> amount of added preservatives**
              </p>

              <div className="Kma">
                <button className="km">Order Now</button>
              </div>
            </div>
          </div>

          <div className="coffImg" data-aos="zoom-in-left">
            <img
              src="https://www.webstaurantstore.com/uploads/blog/2023/8/mocha-breakfast-smoothie-and-coffee-beans-in-glass-jar-on-dark-concrete-background.jpg"
              alt=""
              className="imgB"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Know;
