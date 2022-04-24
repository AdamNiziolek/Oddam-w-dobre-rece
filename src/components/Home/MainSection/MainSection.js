import React from 'react';
import { Link } from 'react-router-dom';

export default function MainSection() {
   return (
      <div className="main-section">
         <div className="main-section__img"></div>
         <div className="main-section__content">
            <h1>
               Zacznij pomagać! <br />
               Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <div className="decoration"></div>
            <div className="main-section__content__buttons">
               <Link
                  to="/oddaj-rzeczy"
                  className="main-section__content__buttons__link"
               >
                  Oddaj <br /> rzeczy
               </Link>
               <Link
                  to="/oddaj-rzeczy"
                  className="main-section__content__buttons__link"
               >
                  Zorganizuj <br /> zbiórkę
               </Link>
            </div>
         </div>
      </div>
   );
}
