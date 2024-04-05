import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./food/Cart";
import HomePage from "./food/HomePage";
import FoodData from "./food/FoodData";
import Pizza from "./food/Pizza";
import Burger from "./food/Burger";
import Payment from "./food/Payment";
 

const App = () => {
  

  const [cartItems, setcartItems] = useState([]);

  const addCart = (item) => {
    setcartItems((prev) => [...prev, item]);
  };

  const calcTotal = () =>{
    let total = 0
    cartItems.forEach((item)=>{
        total = total + parseInt(item.price)
    })
    return total
  }

  const clearCart = () =>{
    setcartItems([])
  }

  const removeCart= (index) =>{
   setcartItems((prev)=> prev.filter((e,i)=> i !==index))
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addCart={addCart}
                cartItems={cartItems}
                FoodData={FoodData}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                removeCart={removeCart}
                clearCart={clearCart}
                calcTotal={calcTotal}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/pizza"
            element={
              <Pizza
              addCart={addCart}
              FoodData={FoodData}
              />
            }
          />

            <Route
            path="/burger"
            element={
              <Burger
              addCart={addCart}
              FoodData={FoodData}
              cartItems={cartItems}
              />
            }
          />
          
          <Route path="/payment" element={<Payment />} />
          
  
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;