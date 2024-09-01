import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "@/styles/products.module.css";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialItem from "@/components/module/Testimonial/Testimonial";

function Comments({ data }) {
  console.log("comments=>", data);
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
          <Swiper
            loop={true}
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={`${styles.swiper}`}
          >
            {data.slice(0, 6).map((comment) => (
              <SwiperSlide
                key={comment.id}
                className={`${styles.swiper_slide}`}
              >
                <TestimonialItem {...comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Comments;
