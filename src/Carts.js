import React from "react";
import { useStateValue } from "./StateProvider";
import Cart from "./Cart";

const Carts = () => {
  const [{ basket }, dispatch] = useStateValue();

  const totalcount = (basket) => {
    let count = 0;
    basket.map((item) => {
      count += item.quantity * item.price;
    });
    return count;
  };

  return (
    <div className="cart__window">
      <div className="Cart_Items">
        {basket.map((product, index) => {
          return <Cart product={product} key={index} />;
        })}
      </div>
      <div className="Cart__checkout">
        <h2> Checkout </h2>
        Total = {totalcount(basket)}
      </div>
    </div>
  );
};

export default Carts;
