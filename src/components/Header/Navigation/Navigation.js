import React from 'react'
import fonts from '../../../globalCss/Fonts.module.css'
import Button from '../../Button/Button'
import {withRouter} from 'react-router-dom'
import classes from './Navigation.module.css'

const navigation = props => {
    const navClass = [classes.navLink].join(' ')

    const onClickActiveHandler = () =>{
        props.history.push("/listing")
        document.documentElement.scrollTop = 0
    }

    const onClickMlsSearchHandler = () => {
        props.history.push("/mlsSearch")
        document.documentElement.scrollTop = 0
    }

    const onClickAboutHandler = () => {
        props.history.push("/about")
        document.documentElement.scrollTop = 0
    }

    const onClickContactHandler = () => {
        document.querySelector("#Contact").scrollIntoView({behavior: "smooth"})
    }

    return(
    <div className={[classes.Navigation, fonts.NavigationFont].join(' ')}>
        <span className={navClass} onClick={onClickActiveHandler}>Active</span>
        <span className={navClass} onClick={onClickMlsSearchHandler}>MLS Search</span>
        <span className={navClass} onClick={onClickAboutHandler}>About</span>
        <span className={navClass}>Resources</span>
        <Button myClass={["smallBtn", "whiteText", "goldBorder", "transparentBackground"]} click={onClickContactHandler}>CONTACT</Button>
    </div>
    )
}

export default withRouter(navigation)