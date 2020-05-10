import React from 'react'
import fonts from '../../../../globalCss/Fonts.module.css'
import Button from '../../../Button/Button'
import classes from './Navigation.module.css'

const navigation = props => {
    const navClass = [classes.navLink, fonts.Caption].join(' ')
    return(
    <div className={[classes.Navigation, fonts.White].join(' ')}>
        <span className={navClass}>Active</span>
        <span className={navClass}>MLS Search</span>
        <span className={navClass}>About</span>
        <span className={navClass}>Resources</span>
        <Button myClass={["smallBtn", "whiteText", "goldBorder", "transparentBackground"]}>CONTACT</Button>
    </div>
    )
}

export default navigation