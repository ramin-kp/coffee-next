import ServiceItem from "@/components/module/ServiceItem/ServiceItem";
import React from "react";

function Services({ services }) {

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((serevice) => (
            <ServiceItem
              key={serevice.id}
              title={serevice.title}
              desc={serevice.desc}
              img={serevice.img}
              icon={serevice.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
