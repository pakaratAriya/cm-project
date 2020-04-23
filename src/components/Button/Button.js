import React from 'react';
import classes from './Button.module.css'

const button = props => {
    let myClass = classes.Button;
    if(props.styles=="gold-white")
        myClass = classes.GoldWhiteBtn;
    return(
        <div className={myClass} onClick={props.click}>
            {props.children}
        </div>
    )
    }

export default button