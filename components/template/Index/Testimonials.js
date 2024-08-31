import React from "react";

//components
import TestimonialItem from "@/components/module/Testimonial/Testimonial";

function Testimonials({ data }) {
  console.log(data);
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {data.map((comment) => (
            <TestimonialItem key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
