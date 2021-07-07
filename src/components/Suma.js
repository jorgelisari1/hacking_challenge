import React from 'react';  
import '../styles/suma.css';



export const Suma = () => {
 
    const [count, setCount] = React.useState(14300);

  return (
    <div className="suma">
  <div className="div1">
  <p className="sumaAsegurada" >Indica la suma asegurada</p>
  <div className="valorSuma">
  <div className="min"> MIN $12.500</div>
  <div className="max"> MAX $16.500</div>
  </div>
  </div>
  <div className="div2">
  <button 
  className="button-menos"
  onClick={() => {
    if(count >= 12500){
        setCount(Math.max(count + 100, 0));
      }
  }}
  >-</button>
  <div className="cantidad">${count}</div>
  <button 
  className="button-mas"
  onClick={() => {
      if(count <= 16500){
        setCount(Math.max(count + 100, 0));
      }
    
  }}
  >+</button>
  </div>
    </div>
  );
}
