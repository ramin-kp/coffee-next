import PageHeader from "@/components/module/PageHeader/PageHeader";
import SearchDetails from "@/components/template/Search/SearchDetails";
import React from "react";

function index({ data }) {
  return (
    <>
      <PageHeader title={"Search"} href={"search"} />;
      <SearchDetails data={data.productsData} />
    </>
  );
}

export default index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/menu");

  const productsData = await res.json();

  return {
    props: {
      data: {
        productsData,
      },
    },
  };
}
