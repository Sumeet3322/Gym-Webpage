import React from "react";
import Nav from "./Navbar/Nav";
import SliderMain from "./Slider/SliderMain";
import AllSections from "./Sections/AllSections";

const HomePage = () => {
  return (
    <div className=" m-auto">
      <Nav title={"Fitencity"} />
      <SliderMain />
      <AllSections/>
    </div>
  );
};

export default HomePage;
