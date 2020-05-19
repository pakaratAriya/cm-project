import React from 'react'
import classes from './NavigationText.module.css'
import {withRouter, Link} from 'react-router-dom'

const navigationText = props => {
    const urls = props.location.pathname.split('/')
    urls[0] = "home"
    let myPath = "";
    return (
        <div className={classes.NavigationText}>
            {urls.map((n,index)=>{
                if(n.toLowerCase() !== "home"){
                    myPath+=n + "/";
                }else{
                    myPath+="/"
                }
                return (
                    n !== "" ?
                    <span key={index}>
                        {index !== 0? <span className={classes.GreaterThanSign}>&nbsp;&nbsp;>&nbsp;&nbsp;</span> : null}
                        <Link className={classes.NavText}  to={myPath}>{n.charAt(0).toUpperCase() + n.slice(1)}</Link></span>
                        : null
                )
            })}
        </div>
    )
}

export default withRouter(navigationText)