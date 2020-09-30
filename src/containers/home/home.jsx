import React from 'react';
import './home.css';
import Product from 'components/product/product';

export default function home() {
  return (
    <section id="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      </div>
      <div className="home__row">
        <Product />
      </div>
      <div className="home__row">
        {}
        {}
        {}
      </div>
      <div className="home__row">
        {}
      </div>
    </section>
  );
}
