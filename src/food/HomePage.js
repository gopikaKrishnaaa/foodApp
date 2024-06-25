import React from 'react'
import { FoodData } from './FoodData'
import './FoodOrder.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()

    const goToPizza = () => {
        navigate ("/pizza");
    }
    const goToBurger = () => {
        navigate ("/burger");
    }
  return (
    <>
    <div className='home-container'>
        <div className="pizza">
            <h1>{FoodData[0].name}</h1>
            <img src={FoodData[0].image}  width={250}  height={200} alt="pizza" onClick={goToPizza}  />
        </div>
        <div className="burger">
        <h1>{FoodData[1].name}</h1>
        <img src={FoodData[1].image}  width={250} height={200} alt="burger" onClick={goToBurger}/>
        </div>
    </div>
    </>
  )
}

export default HomePage