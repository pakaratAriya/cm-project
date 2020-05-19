import React from 'react'
import classes from './ListingPageNavigation.module.css'

const listingPageNavigation = props => {
    let pages = ["...", props.pageNumber, "..."];
    if(props.pageNumber === 1)
        pages = [1,2,"..."]
    if(props.pageNumber === 5)
        pages = ["...",4, 5]
    return (
        <div className={classes.ListingPageNavigation}>
            <div className={classes.NavArrow}>{"<<"}</div>
            {
                pages.map(page=>(
                    <div className={classes.PageNumber}>{page}</div>

                ))
            }
            <div className={classes.NavArrow}>{">>"}</div>
        </div>
    )
}

export default listingPageNavigation