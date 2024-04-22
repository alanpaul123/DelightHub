import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Items() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="foodBox" data-aos="fade-up-left" id="menu">
        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://img.taste.com.au/t2N9PNdl/taste/2020/12/sausage-roll-maker-chocolate-eclairs-recipe-168351-2.png"
              alt=""
            />
          </div>

          <h2>Eclair Cup</h2>
          <p>
            Cupcake With bit of <br /> Chocolate Syrup
          </p>
        </div>

        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://www.thecookierookie.com/wp-content/uploads/2014/12/twix-cookie-cups-5-of-11.jpg"
              alt=""
            />
          </div>

          <h2>Cream Cookie</h2>
          <p>
            Cookie With bit of <br />
            sprinle
          </p>
        </div>

        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://www.loveandoliveoil.com/wp-content/uploads/2014/12/triple-ginger-snaps2.jpg"
              alt=""
            />
          </div>

          <h2>Ginger Snap</h2>
          <p>
            A bit of Ginger <br />
            does magic
          </p>
        </div>

        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg"
              alt=""
            />
          </div>

          <h2>ChocoChip Cookie </h2>
          <p>
            A bit Of Choclate <br />
            Makes it Delightful
          </p>
        </div>
      </div>

      <div className="foodBox" data-aos="fade-up-right">
        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ftaLKV6TP4bh98maC-KKN0IWN7_QtJuNUP5ukJUQOA&s"
              alt=""
            />
          </div>

          <h2>Rasberry Bun</h2>
          <p>
            Strawberry does <br /> wonders
          </p>
        </div>

        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://sugargeekshow.com/wp-content/uploads/2020/06/fruit_tart_featured.jpg"
              alt=""
            />
          </div>

          <h2>Fruit Tart</h2>
          <p>
            Enjoy with a taste <br /> of nature
          </p>
        </div>

        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9ybD4A1Qg7W3AGBOeihP-IoSfp8ONphWcHrX-DNqWg&s"
              alt=""
            />
          </div>

          <h2>Chocolate Tart</h2>
          <p>
            Chocolate makes Your <br /> Mouth Water
          </p>
        </div>

        <div className="fbox">
          <div className="imgBox">
            <img
              src="https://omnivorescookbook.com/wp-content/uploads/2019/12/1911_Steamed-Custard-Buns_550.jpg"
              alt=""
            />
          </div>

          <h2>Custard Bun</h2>
          <p>
            Bun with the <br /> magic of custard
          </p>
        </div>
      </div>
    </>
  );
}

export default Items;
