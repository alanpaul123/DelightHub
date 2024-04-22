import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <h1 className="Precip" data-aos="flip-left">
        Polpular Dishes
      </h1>
      <div className="recipe" id="dishes">
        <div className="rbox" data-aos="fade-right">
          <img
            src="https://bakefromscratch.com/wp-content/uploads/2019/05/Berries-Cream-Layer-135JBfull-1-696x557.jpg"
            alt=""
          />
          <p>CREAM CAKES</p>
          <p className="rp">
            All you need is coffee,donout, <br /> wifi, and a dream.
          </p>
          <p>Learn More</p>
        </div>

        <div className="rbox" data-aos="flip-right">
          <img
            src="https://suncorefoods.com/cdn/shop/articles/SUNCORE_FOODS_MAGICAL_AQUA_BLUE_SPIRULINA_PANCAKE_STACK_800X800_68b58972-92a9-4086-8e7e-4d08975a48f5_large.jpg?v=1693166094"
            alt=""
          />
          <p>CREAM CAKES</p>
          <p className="rp">
            Donut judge me until you've walked <br /> a mile in my sprinkles
          </p>
          <p>Learn More</p>
        </div>

        <div className="rbox" data-aos="flip-left">
          <img
            src="https://healyeatsreal.com/wp-content/uploads/2015/07/Blueberry-Tart-800x533-1.jpg"
            alt=""
          />
          <p>BLUEBERRY TART</p>
          <p className="rp">
            The sweetness of these berries <br />
            seriously blue me away
          </p>
          <p>Learn More</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
