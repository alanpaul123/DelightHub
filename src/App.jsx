import { useState } from "react";

import Nav from "./Nav";
import Recipe from "./Recipe";
import Offers from "./Offers";
import Items from "./Items";
import Footer from "./Footer";
import Know from "./Know";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Recipe />
      <Offers />
      <Items />
      <Know />
      <Footer />
    </>
  );
}

export default App;
