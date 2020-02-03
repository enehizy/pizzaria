import React from 'react';

import PizzaCard from './PizzaCard'
function PizzaGrid(){
    const pizzas=[{
        name:"Beef Pizza",
        img:"/img/beefpizza.jpg",
        price:"1500"
    },
    {
        name:"Chicken Pizza",
        img:"/img/chickenpizza.jpg",
        price:"2000"
    },
    {
        name:"Pizza Magaretta",
        img:"/img/magpizza.jpg",
        price:"2100"
    },
    {
        name:"Beef and Onion Pizza",
        img:"/img/beefandonion.jpg",
        price:"1800"
    },{
        name:"Cheeze Pizza",
        img:"/img/cheesepizza.jpg",
        price:"2500"
    },
    {
        name:"Pepperoni Pizza",
        img:"/img/pepperonipizza.jpg",
        price:"2000"
    }
]
    return(
    <div className="pizzagrid">
    <div className='p-grid'>
     {pizzas.map((pizza)=>{
      return(<div className="p-col-12 p-md-6 p-lg-4"><PizzaCard name={pizza.name} img={pizza.img} price={pizza.price}/></div>)
     })}
    </div>
    </div>)
}
export default PizzaGrid;