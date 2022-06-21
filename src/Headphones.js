import React, { useState, useEffect } from "react";
import "./Product.css";
import ShowProduct from "./ShowProduct";

const Product = () => {
  const [data, setData] = useState([]);

  let componentsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://sachinecomm.herokuapp.com/categories/Headphones"
      );

      if (componentsMounted) {
        setData(await response.clone().json());
      }

      return () => {};
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      <div>
        <ShowProduct data={data}></ShowProduct>
      </div>
    </div>
  );
};

export default Product;
