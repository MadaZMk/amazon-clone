import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71dt-t0-LBL._SX3000_.jpg"
          alt="Home img"
        />
        <div className="home__row">
          <Product
            id="A1"
            title="OnePlus 10T 5G (UK) 16GB RAM 256GB Storage SIM-Free Smartphone with 150W SUPERVOOC and 50MP Triple Camera System - Jade Green"
            price={251.93}
            image="https://m.media-amazon.com/images/I/41-7pHaQy9L._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="A2"
            title="Philips Viva Collection Compact Juicer, 1.5 Litre, 500 Watt, Quick Clean Technology, Drip Stop, Dishwasher Safe Parts, See-through Pulp Container, Direct Serve, Black"
            price={67.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51GJxM48JFL.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="B1"
            title="Philips Airfryer 3000 Series XL, 6.2L (1.2Kg), 14-in-1 Airfryer, 90% Less fat with Rapid Air Technology, Digital, Recipe app"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51SxgTzpaXL._AC_SX679_.jpg"
          />
          <Product
            id="B2"
            title="Yabano Popcorn Maker Machine, 5L Popcorn Popper, Nonstick Plate, Electric Stirring with Quick-Heat Technology, Cool Touch Handles, Healthy Less Fat, 800W, BLACK"
            price={39.09}
            rating={4}
            image="https://m.media-amazon.com/images/I/71AWPnEY7sL.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
          <Product
            id="B3"
            title="Smart 4K Projector, Auto Focus & Keystone, VOPLLS 700 ANSI Full HD 1080P WiFi 6 Bluetooth Portable Projector, 60Hz Home Cinema Projector for iOS/Android/Outdoor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81kk6mgS4ML._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="C1"
            title="KOORUI 34 Inch Ultrawide Curved Gaming Monitor, 165Hz, WQHD 1440P, 1000R, MPRT 1MS, HDR 400, 2x HDMI 2.0, 1x DisplayPort 1.4, AdaptiveSync, Tilt/Height Adjustable, Black"
            price={328.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Qs4hqN2pL.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
          <Product
            id="C1"
            title="Apple 2023 iMac all-in-one desktop computer with M3 chip: 8-core CPU, 8-core GPU, 24-inch 4.5K Retina display, 8GB unified memory, 256GB SSD storage, matching accessories. Works with iPhone; Green"
            price={1328.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/719F4aegwhL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
