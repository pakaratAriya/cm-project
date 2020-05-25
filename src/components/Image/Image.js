import React from 'react'
import classes from "./Image.module.css"
import {withRouter} from 'react-router-dom'

const image = props => {
    return(
    <div className={classes.Image} onClick={()=>{
            props.history.push("/listing/BurnabyLake")
            document.documentElement.scrollTop = 0;
        }}
        style={{
            backgroundImage: "url('" + process.env.PUBLIC_URL + "/images/PageInfoImages/ListingPhotos/" + props.src + ".jpg')"
        }}>
        <div className={classes.Gradient}></div>
        <div className={classes.PlaceName}>{props.place}</div>
        <div className={classes.Price}>${props.price.toLocaleString()}</div>
    </div>
    )
}

export default withRouter(image)
