import React from "react";
//components
import PageHeader from "@/components/module/PageHeader/PageHeader";
import Pricing from "@/components/template/Menu/Pricing";

function MenuPage({ data }) {
  return (
    <>
      <PageHeader title={"Menu"} href={"menu"} />
      <Pricing data={data.menu} />
    </>
  );
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:4000/menu");

  const menuData = await menuResponse.json();

  return {
    props: {
      data: {
        menu: menuData,
      },
    },
  };
}

export default MenuPage;
