import React from 'react'
import classes from './Navigation.module.css'

const navigation = props => (
    <div className={classes.Navigation}>
        <span className={classes.navLink}>ACTIVE</span>
        <span className={classes.navLink}>MLS SEARCH</span>
        <span className={classes.navLink}>SOLD</span>
        <span className={classes.navLink}>CONTACT</span>
    </div>
)

export default navigation