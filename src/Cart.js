import React, { useRef } from "react";
import "./Cart.css";
import { useStateValue } from "./StateProvider";

const Cart = ({ product }) => {
  const [{ basket }, dispatch] = useStateValue();
  const nameForm = useRef(null);

  const deletefromBasket = () => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      item: {
        id: product.id,
      },
    });
  };

  const onChangeBasket = () => {
    dispatch({
      type: "ON_CHANGE_BASKET",
      item: {
        quantity: nameForm.current.value,
        id: product.id,
      },
    });
  };

  return (
    <div className="CART" key={product.id}>
      <div className="cart__image__div">
        <img src={product.image} className="cart__image" />
      </div>
      <div className="cart__detail">
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
        <br></br>
        <input
          ref={nameForm}
          type="number"
          min={0}
          defaultValue={product.quantity}
          className="cart_quantity"
        />
        <button onClick={onChangeBasket} className="cart__update">
          Update
        </button>
        <br />
        <button onClick={deletefromBasket} className="cart__delete">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
