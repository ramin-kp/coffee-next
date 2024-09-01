import PageHeader from "@/components/module/PageHeader/PageHeader";
import Story from "@/components/template/About/Story";
import React from "react";

function About() {
  return (
    <>
      <PageHeader title={"About Us"} href={"about"} />
      <Story />
    </>
  );
}

export default About;
