import React from 'react'
import classes from './PageInfoNavigation.module.css'

const pageInfoNavigation = props => {
    return (
        <div className={classes.PageInfoNavigation}>
            <div className={classes.PageInfoNav}>Photos</div>
            <div className={classes.PageInfoNav}>Videos</div>
            <div className={classes.PageInfoNav}>Maps</div>
        </div>
    )
}

export default pageInfoNavigation