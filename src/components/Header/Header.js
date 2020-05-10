import React from 'react'
import classes from './Header.module.css'
import fonts from '../../globalCss/Fonts.module.css'
import Navigation from './Navigation/Navigation'
import { NavLink} from 'react-router-dom'

const header = props => {
    return (
        <div className={classes.Header}>
            <div className={[classes.Title,fonts.White].join(' ')}>
                <p className={fonts.H2}>CM</p>
            </div>
            <Navigation/>
        </div>
    )
}

export default header