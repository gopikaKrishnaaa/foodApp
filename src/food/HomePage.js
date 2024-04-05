import React from 'react'
import FoodData from './FoodData'
import { useNavigate } from 'react-router-dom'
  





const HomePage = () => {
  const navigate = useNavigate()

    const Pizza = () => {
        navigate ("/pizza");
    }
    const Burger = () => {
        navigate ("/burger");
    }
  return (
    <>
    <div className='home'>
        <div className='title'>
            <h1>{FoodData[0].name}</h1>
            <img src={FoodData[0].image}  width={250}  height={200} alt="pizza" onClick={Pizza}  />
        </div>
        <div>
        <h1>{FoodData[1].name}</h1>
        <img src={FoodData[1].image}  width={250} height={200} alt="burger" onClick={Burger}/>
        </div>
    </div>
    </>
  )
}


export default HomePage
