import React from 'react';
import './home.css';
import Product from 'components/product/product';

export default function home() {
  return (
    <section id="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home__row">
          <Product title="The Fault in Our Stars" image="https://m.media-amazon.com/images/I/611t7ouaSoL._AC_UL320_.jpg" price={9.27} rating={4} />
          <Product title="Xbox 360 controller" image="https://m.media-amazon.com/images/I/41+sLcxaInL._AC_SL520_.jpg" price={19.99} rating={5} />
        </div>
        <div className="home__row">
          <Product title="KENCO MILLICANO 500G INST COFFEE 130947" image="https://m.media-amazon.com/images/I/618REOqgEwL._AC_UL320_.jpg" price={26.99} rating={5} />
          <Product title="Weekends Coffee And Saint Bernard Chien T-Shirt" image="https://m.media-amazon.com/images/I/71Wad7g+ReL._AC_UL320_.jpg" price={16.99} rating={3} />
          <Product title="Trolls World Tour (4K UHD)" image="https://m.media-amazon.com/images/I/A1pmSXQr3UL._AC_UL320_.jpg" price={5.99} rating={5} />

        </div>
        <div className="home__row">
          <Product title="Plantronics 205300-01 Voyager 5200 - Bluetooth Headset, Black/Red" image="https://m.media-amazon.com/images/I/61u5yynCsyL._AC_UY218_.jpg" price={119.89} rating={4} />
        </div>
      </div>
    </section>
  );
}
