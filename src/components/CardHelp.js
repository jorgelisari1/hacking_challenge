import React from 'react';
import car from '../assets/img/icon_car.png';
import '../styles/card.css';



export const CardHelp = () => {
 

  return (
    <div className="father">
    <div className="text-ayuda"> 
        AYUDA
    </div>
    <div className="cardHelp">
      
        <img className="image" src={car} alt="car" />
        <div>
          <p className="question">¿No encuentras el modelo?</p>
          <p className="click">CLICK AQUÍ</p>
        </div>
    </div>
    </div>
  );
}
