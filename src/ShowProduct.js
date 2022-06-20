import React from 'react'

const ShowProduct = (props) => {
  return (
    <div className="Products">
        {props.data.map((product,index) => {
          return (
            <div className="product" key={index}>
              <img className="product__image" src={product.images}></img>
              <h5 className="product__title">{product.title}</h5>
              <p className="product__price">{product.price}</p>
              <button className="product__button">Buy Now</button>
            </div>
          );
        })}
      </div>
  )
}

export default ShowProduct;
