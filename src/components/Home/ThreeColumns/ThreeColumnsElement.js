import React from 'react';

export default function ThreeColumnsElement({ number, title, text }) {
   return (
      <div className="three-columns__element">
         <h2>{number}</h2>
         <h3>{title}</h3>
         <p>{text}</p>
      </div>
   );
}
