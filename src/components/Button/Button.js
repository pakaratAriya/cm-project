import React from 'react';
import fonts from '../../globalCss/Fonts.module.css'
import classes from './Button.module.css'

const button = props => {
    let myClass = [];
    myClass.push(classes.Button)
    myClass.push(fonts.Caption)
    if(props.myClass.includes("goldBorder"))
        myClass.push(classes.GoldBorder);
    if(props.myClass.includes("goldBackground"))
        myClass.push(classes.GoldBackground);
    if(props.myClass.includes("transparentBackground"))
        myClass.push(classes.TransparentBackground)
    if(props.myClass.includes("whiteText"))
        myClass.push(fonts.White)
    if(props.myClass.includes("goldText"))
        myClass.push(fonts.Gold)
    if(props.myClass.includes("smallBtn"))
        myClass.push(classes.SmallButton)
    if(props.myClass.includes("mediumBtn"))
        myClass.push(classes.MediumButton)
    return(
        <div className={myClass.join(' ')} style={props.style} onClick={props.click}>
            {props.children}
        </div>
    )
    }

export default button