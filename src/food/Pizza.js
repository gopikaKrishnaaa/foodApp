import React from "react";
import { FoodData } from "./FoodData";
import { useNavigate } from "react-router-dom";
import './FoodOrder.css'

const Pizza = ({ addCart }) => {

  const nav = useNavigate();
  const goToHome = () => {
    nav("/");
  };

  function toPlaceOrder(products) {
    addCart(products);
  }

  return (
    <div className="pizzacart-container">
      <h1 className="myh1">{FoodData[0].subItemsData.name}</h1>
      <div className="inner-container">
        {FoodData[0].subItemsData.subItems.map((item, index) => {
          return (
            <div key={index} className="pizza-types">
              <div className="image-box">
                <img src={item.image} alt="item1" />
              </div>
              <div className="content-box">
                <h3>{item.name}</h3>
                <p className="price">
                  <label>Price</label> : {item.price}
                </p>
                <p className="description">
                  <label>Description</label> : {item.description}
                </p>
                <button className="orderbtn" onClick={() => toPlaceOrder(item)}>
                  Order Now
                </button>
               
              </div>
            </div>
          );
        })}
      </div>
      <div className="homebtn">
        <button onClick={goToHome}>Go Home</button>
      </div>
    </div>
  );
};

export default Pizza;