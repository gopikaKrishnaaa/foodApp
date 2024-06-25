import React from 'react'
import {useNavigate} from 'react-router-dom'
import './FoodOrder.css'

const FoodCart = ({cartItem,removeCart,calcTotal,clearCart,buyNow}) => {
  
  const home = useNavigate();
  const goToHome = () => {
    home("/")
  }
  return (
    <div>
      <div className='ordered-items'>
      {
         cartItem.map((e,i) => {
          return <div key={i} className='cartbox'>
            <div className='image-box'>
                <img src={e.image} alt="item1" />
             </div>
             <div className="content-box cart-item-details">
                <h3>{e.name}</h3>
                <p className="price">
                  <label >Price</label> : {e.price}
                </p>
                <div className="cartpage-buttons">
                <button className="removebtn" onClick={() => removeCart(i)}>Remove</button>
                </div>
               
              </div>
             
              
          </div>
           
         })
      }
      

      </div>
      <div className="buy-box">
                  <h3>Total : {calcTotal()}</h3>
                  <button className="clearcart" onClick={clearCart}>Clear</button>         
                  <button className='buynow'>Buy Now{buyNow}</button>
        </div>
   
      <div  className="homebtn carthomebtn">
          <button onClick={goToHome}>Go Home</button>
      </div>
    </div>
  )
}

export default FoodCart