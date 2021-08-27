import React from 'react'

export default function HomeEasyStepsElement({Icon, title, text}) {
    return (
        <div className="easy-steps__four-columns__element">
            <Icon className="easy-steps__four-columns__element__icon"/>
            <h3>{title}</h3>
            <div className="easy-steps__four-columns__element__line"/>
            <p className="easy-steps__four-columns__element__text">
                {text}
            </p>
        </div>
    )
}
