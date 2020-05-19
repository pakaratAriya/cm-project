import React from 'react'
import classes from "./Image.module.css"
import {withRouter} from 'react-router-dom'

const image = props => {
    return(
    <div className={classes.Image} onClick={()=>{
        props.history.push("/listing/BurnabyLake")
        document.documentElement.scrollTop = 0;
    }}>
        <div className={classes.Gradient}></div>
        <div className={classes.PlaceName}>Vancouver BC</div>
        <div className={classes.Price}>$15,000,000</div>
    </div>
    )
}

export default withRouter(image)
