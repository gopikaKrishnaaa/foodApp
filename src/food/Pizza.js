
import React from 'react'



const Pizza = ({FoodData,addCart}) => {
  return (
    <>

    <div>

         <>
          <h1>{FoodData[0].subItemsData.name}</h1>
          <div>
            {FoodData[0].subItemsData.subItems.map((subItem,i)=>{
              return(
                <>
                <h2>{subItem.name}</h2>
                <img src={subItem.image} />
                <p>{subItem.description}</p>
                <h4>Price : {subItem.price}</h4>
                <button onClick={()=>addCart(subItem)}>Add to cart</button>
                </>
              )
            })}
          </div>
         </>
        )

    </div>
    </>
  )
}

export default Pizza