import React from 'react';
import ThreeColumnsElement from './ThreeColumnsElement';
import { elements } from './threeColumnsList.json';

export default function ThreeColumns() {
   return (
      <div className="three-columns">
         {elements.map((element, idx) => {
            const { number, title, text } = element;
            return (
               <ThreeColumnsElement
                  key={idx}
                  number={number}
                  title={title}
                  text={text}
               />
            );
         })}
      </div>
   );
}
