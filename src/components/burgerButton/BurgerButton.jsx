import React from "react";
//import css
import './BurgerButton.css'

//burgur button responsive and get props from NavBar
const BurgerButton = (props) => {

    return (
        // the props at an event
        <div onClick={props.handleClick} className={`icon nav-icon-2 ${props.cliked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default BurgerButton;