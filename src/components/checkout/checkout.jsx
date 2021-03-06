import React from 'react';
import './checkout.css';
import Subtotal from 'components/subtotal/subtotal';

export default function checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__ad" alt="" />
        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
