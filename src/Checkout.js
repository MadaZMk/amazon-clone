import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2018/FASHION/PRIME_WARDROBE/XSITE/LAUNCH_OCT/UK_400x39._CB483365775_.jpg"
          alt=""
        />
        {/* <div 
        // ! this was working as well, but had problem do add user name to checkout
        className="checkout__title">Your Shopping Basket</div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id} 
            title={item.title} 
            image={item.image} 
            price={item.price} 
            rating={item.rating} 
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal /> */}
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
