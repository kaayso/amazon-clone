import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Header() {
  return (
    <header id="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input className="header__search-input" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-one"> Hello kaay so </span>
          <span className="header__option-line-two"> sign in </span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one"> Returns </span>
          <span className="header__option-line-two"> &amp; Orders </span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one"> Your </span>
          <span className="header__option-line-two"> Prime </span>
        </div>
      </div>
      <div className="header__option-basket">
        <ShoppingBasketIcon />
        <span className="header__option-line-two header__basket-count">0</span>
      </div>
    </header>
  );
}
