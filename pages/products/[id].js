import React from "react";

//components
import PageHeader from "@/components/module/PageHeader/PageHeader";
import ProductDetails from "@/components/template/Products/ProductDetails";
import { useRouter } from "next/router";

function Products({ data }) {
  const route = useRouter();
  console.log(route);
  return (
    <>
      <PageHeader title={"products"} href={`products/${route.query.id}`} />
      <ProductDetails data={data.menu} />
    </>
  );
}
export default Products;

export async function getStaticPaths() {
  const menuResponse = await fetch(`http://localhost:4000/menu`);

  const menusData = await menuResponse.json();

  const paths = menusData.map((menu) => ({ params: { id: String(menu.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const menuResponse = await fetch(`http://localhost:4000/menu/${params.id}`);

  const menusData = await menuResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);

  const data = await commentsResponse.json();

  const commentData = data.filter((item) => item.productID === +params.id);

  return {
    props: {
      data: {
        menu: menusData,
        comment: commentData,
      },
    },
    revalidate: 12 * 60 * 60,
  };
}
