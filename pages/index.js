import React from "react";

//components
import Slider from "@/components/template/Index/Slider";
import Services from "@/components/template/Index/Services";
import About from "@/components/template/Index/About";
import Offer from "@/components/template/Index/Offer";
import Menu from "@/components/template/Index/Menu";
import Reservation from "@/components/template/Index/Reservation";
import Testimonials from "@/components/template/Index/Testimonials";

function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonials data={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();

  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData = await commentsResponse.json();
  console.log("comments =>", commentsData);

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comments: commentsData,
      },
    },
    revalidate: 12 * 60 * 60,
  };
}

export default Home;
