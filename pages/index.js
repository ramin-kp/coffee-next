import React from "react";

//components
import Slider from "@/components/template/Index/Slider";
import Services from "@/components/template/Index/Services";
import About from "@/components/template/Index/About";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
    </>
  );
}

export default Home;
