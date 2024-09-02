import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//components
import Card from "@/components/module/Card/Card";

function SearchDetails({ data }) {
  const route = useRouter();

  const [hotProducts, setHotProducts] = useState([]);
  const [coldProducts, setColdProducts] = useState([]);

  // useEffect;
  useEffect(() => {
    const hotFilter = data.filter(
      (item) =>
        item.title.toLowerCase().includes(route.query.q.toLocaleLowerCase()) &&
        item.type.toLowerCase() === "hot"
    );
    const coldFilter = data.filter(
      (item) =>
        item.title.toLowerCase().includes(route.query.q.toLocaleLowerCase()) &&
        item.type.toLowerCase() === "cold"
    );
    setHotProducts(hotFilter);
    setColdProducts(coldFilter);
  }, [route.query]);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: " 5px" }}
          >
            Menu &amp; Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {hotProducts.length > 0 ? (
              hotProducts
                .slice(0, 7)
                .map((item) => <Card key={item.id} {...item} />)
            ) : (
              <h1 className="products_empty_box">
                Unfortunately, no product matching your search was found.
              </h1>
            )}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {coldProducts.length > 0 ? (
              coldProducts
                .slice(0, 7)
                .map((item) => <Card key={item.id} {...item} />)
            ) : (
              <h1 className="products_empty_box">
                Unfortunately, no product matching your search was found.
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
