import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';

export default function subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{14.44}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
      <button type="button">Proceed to checkout</button>
    </div>
  );
}
