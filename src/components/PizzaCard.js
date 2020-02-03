import React from 'react';
import pizzapricesvg from '../pizzaprice.svg';
import {Card} from 'primereact/card';
function PizzaCard(props){


return(
    <div className="pizzacard">
    {/* <div className="pizzacardbody">
    <img className="pizzaimg" src="img/cheesepizza.jpg"/> 
    <img className="pizzaprice"src={pizzapricesvg}/>      
    </div>
     <div className="pizzacardfooter"></div> */}
  
     
          
<div className="pizzacardbody">
<img className="pizzaimg" src={props.img}/> 
{/* <img className="pizzaprice"src={pizzapricesvg}/>       */}
<svg
   
   xmlns="http://www.w3.org/2000/svg"
   
   width="100px"
   height="100px"
   viewBox="0 0 16.502726 18.00005"
   version="1.1"
   id="svg8"
   className="pizzaprice"
   >
  
  <g
    
     id="layer2"
    
     transform="translate(-158.00614,-98.601191)">
    <path
       style={{fill:'#c01b17',fillOpacity:'1',stroke:'none',strokeWidth:'0.26458332px',strokeLinecap:'butt',strokeLineJoin:'miter',strokeOpacity:'1'}}
       d="m 158.99041,116.46895 c -4.16161,-13.38083 7.83888,-19.432983 15.38616,-17.323681 v 17.323681 z"
       id="path19"
      />
    <text
     
       style={{fontStyle:'normal',fontWeight:'normal',fontSize:'4.23333311px',lineHeight:'1.25',fontFamily:'sans-serif',letterSpacing:'0px',wordSpacing:'0px',fill:'#ffffff',fillOpacity:'1',stroke:'none',strokeWidth:'0.26458332'}}
       x="159.77913"
       y="110.31521"
       id="text825"><tspan
        
         id="tspan823"
         x="159.77913"
         y="110.31521"
    style={{fill:'#ffffff',strokeWidth:'0.26458332'}}>&#8358;{props.price}</tspan></text>
  </g>
</svg>
</div>
<div className="pizzacardfooter"><h3 >{props.name}</h3><img src="img/greencheck.svg"/></div> 


     
 

    </div>
)
}

export default PizzaCard;