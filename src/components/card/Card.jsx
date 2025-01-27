import React from 'react';
import './Card.css';
import images from '../data/images.js';
import cardData from '../data/card.json';
const Card = () => {
  return (
    
       <div>
       {cardData.graduates.map(item =>{
        return  ( 
          <div key={item.id} className='flex justify-center items-center left-0 gap-5 hover:bg-gray-200'>
            <img src={images.layer} alt={item.name} /> 
             <div className='inline-block'>
                 <h2 className='font-bold'>{item.name}</h2> 
                 <p className='text-cyan-900'><a href="#" >{item.desc}</a></p> 
             </div>
            
           </div>
          )
       })}
         </div>
        
  );
}




export default Card

