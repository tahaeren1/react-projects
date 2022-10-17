import React from "react";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="checkoutProduct">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          alt=""
          className="checkoutProduct__image"
        />
        <div className="product__info">
          <div className="checkoutProduct__title">
            <p>{title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <button>Remove from Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
