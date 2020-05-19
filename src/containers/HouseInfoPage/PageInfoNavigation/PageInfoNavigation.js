import React from 'react'
import classes from './PageInfoNavigation.module.css'
import {withRouter} from 'react-router-dom'

const pageInfoNavigation = props => {
    const navContent = ["Photos", "Videos", "Maps"]
    
    const clickNavigateHandler = navName => {
        if(props.activeIndex===undefined){
            document.documentElement.scrollTop = 0;
        }
        props.history.push("/listing/burnabylake/" + navName)
    }

    return (
        <div className={classes.PageInfoNavigation}>
            {navContent.map((content, index)=>{
                return (<div key={index} onClick={()=>clickNavigateHandler(content)} className={props.activeIndex == index ? classes.Active : classes.PageInfoNav}>{content}</div>)
            })}
        </div>
    )
}

export default withRouter(pageInfoNavigation)