import React from "react";
import ShowProduct from "./ShowProduct";

const ShowProducts = (props) => {
  return (
    <div className="Products">
      {props.data.map((product, index) => {
        return <ShowProduct product={product} key={index} />;
      })}
    </div>
  );
};

export default ShowProducts;
