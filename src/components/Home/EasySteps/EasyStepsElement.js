import React from 'react';
import { ReactComponent as Icon1 } from '../../../assets/icon1.svg';
import { ReactComponent as Icon2 } from '../../../assets/icon2.svg';
import { ReactComponent as Icon3 } from '../../../assets/icon3.svg';
import { ReactComponent as Icon4 } from '../../../assets/icon4.svg';

export default function EasyStepsElement({ icon, title, text }) {
    const className = "easy-steps__four-columns__element__icon";

    const icons = () => {    
        switch (icon) {
            case '1':
                return <Icon1 className={className}/>
            case '2':
                return <Icon2 className={className}/>
            case '3':
                return <Icon3 className={className}/>
            case '4':
                return <Icon4 className={className}/>
            default:
                return null;
        }
    }
    
    return (
        <div className="easy-steps__four-columns__element">
            {icons()}
            <h3>{title}</h3>
            <div className="easy-steps__four-columns__element__line"/>
            <p className="easy-steps__four-columns__element__text">
                {text}
            </p>
        </div>
    )
}
