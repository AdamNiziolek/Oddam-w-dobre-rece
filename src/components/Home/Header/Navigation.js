import React from 'react';
import { Link } from 'react-scroll';
import { useHistory } from 'react-router-dom';
import { links } from './navList.json';

export default function Navigation() {
   const history = useHistory();
   const handleChange = () => history.push('/');

   return (
      <div className="header__nav">
         {links.map((link, idx) => {
            const { to, text } = link;
            return (
               <Link
                  key={idx}
                  className="header__nav__link"
                  to={to}
                  smooth={true}
                  duration={500}
                  onClick={handleChange}
               >
                  {text}
               </Link>
            );
         })}
      </div>
   );
}
