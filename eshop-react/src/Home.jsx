import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="12321341"
              title="Bennet Mystic 15.6"
              price={11.96}
              rating={5}
              image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HA244?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1631831826000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
