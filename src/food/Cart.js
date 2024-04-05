import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Cart = ({cartItems,calcTotal,clearCart,removeCart}) => {

  const nav = useNavigate()

  const handlePaymentPage = () =>{
   nav('/payment')
  }
  
  return (
    <>
    <div>
      <h2>Food in Cart</h2>
      {cartItems.length > 0 
      ? 
      <>
      <div>
      <button onClick={clearCart}>Clear Cart</button>
        {cartItems.map((item,index)=>{
          return(
            <>
            <div>
              <h2>{item.name}</h2>
              <img src={item.image} />
              <h4>Price {item.price}</h4>
              <button onClick={()=>removeCart(index)}>Remove from Cart</button>
            </div>
            </>
          )
        })}
        <h2>Total Price : {calcTotal()}</h2>
        <button onClick={handlePaymentPage}>Proceed To Payment</button>
      </div>
      </> 
      : 
      <>
      <h1>Your Cart is Empty</h1>
      <Link to='/'> Go Home</Link>
      </> }
    </div>
    </>
  )
}

export default Cart