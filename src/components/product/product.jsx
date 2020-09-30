/* eslint-disable react/no-array-index-key */
import React from 'react';
import './product.css';

export default function product({
  title, price, image, rating,
}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            // eslint-disable-next-line jsx-a11y/accessible-emoji
            Array(rating).fill().map((_, i) => (<p key={i}>⭐️</p>))
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button type="button">Add to Basket</button>
    </div>
  );
}
