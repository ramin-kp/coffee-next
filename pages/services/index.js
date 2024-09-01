import React from "react";

//components
import PageHeader from "@/components/module/PageHeader/PageHeader";
import ServicesDetails from "@/components/template/Services/ServicesDetails";

function Services({ data }) {
  return (
    <>
      <PageHeader title={"Services"} href={"service"} />
      <ServicesDetails data={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
      },
    },
  };
}

export default Services;
