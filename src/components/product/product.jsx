import React from 'react';
import './product.css';

export default function product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Xbox 360 controller</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/41+sLcxaInL._AC_SL520_.jpg" alt="" />
      <button>Add to Basket</button>
    </div>
  );
}
