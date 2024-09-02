import React from "react";

//components
import PageHeader from "@/components/module/PageHeader/PageHeader";
import Comments from "@/components/template/Testimonial/Comments";

function Testimonial({ data }) {
  return (
    <>
      <PageHeader title={"Testimonial"} href={"testimonial"} />
      <Comments data={data.comments} />
    </>
  );
}
export default Testimonial;

export async function getStaticProps() {
  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData = await commentsResponse.json();

  return {
    props: {
      data: {
        comments: commentsData,
      },
      revalidation: 12 * 60 * 60,
    },
  };
}
