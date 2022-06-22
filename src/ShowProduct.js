import React from "react";
import { useStateValue } from "./StateProvider";

const ShowProduct = ({ product }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product._id,
        title: product.title,
        price: product.price,
        image: product.images,
      },
    });
  };

  return (
    <div>
      <div className="product" key={product._id}>
        <img className="product__image" src={product.images} alt=""></img>
        <h5 className="product__title">{product.title}</h5>
        <p className="product__price">{product.price}</p>
        <button onClick={addToBasket} className="product__button">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ShowProduct;
