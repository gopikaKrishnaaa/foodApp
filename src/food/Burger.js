import React from "react";
import { FoodData } from "./FoodData"; 
import {useNavigate} from 'react-router-dom'

const Burger = ({addCart}) => {
    const nav = useNavigate();
    const goToHome = () => {
        nav("/");
    }

    function toPlaceOrder (product) {
      
        addCart(product);
        
      }
  return (
    <div className="burger-container">
      <h1 className="myh1">{FoodData[1].subItemsData.name}</h1>
      <div className="inner-container">
        {FoodData[1].subItemsData.subItems.map((item, index) => {
          return (
            <div key={index} className="burger-types">
              <div className="image-box">
                <img src={item.image} alt="burger" />
              </div>
              <div className="content-box">
                <h3>{item.name}</h3>
                <p className="price">
                  <label >Price</label> : {item.price}
                </p>
                <p className="description">
                  <label >Description</label> : {item.description}
                </p>
                <button className="orderbtn" onClick={() => toPlaceOrder(item)}>Order Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <div  className="homebtn">
          <button onClick={goToHome}>Go Home</button>
      </div>
    </div>
  );
};

export default Burger;