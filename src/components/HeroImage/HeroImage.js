import React from 'react'
import classes from './HeroImage.module.css'
import fonts from '../../globalCss/Fonts.module.css'

const heroImage = props => (
    <div className={classes.HeroImage}>
        <div className={classes.GridWrapper}>
            <div className={[classes.LogoItem, fonts.H1, fonts.White].join(' ')}>
                CM
            </div>
            <div className={[classes.Navigation, fonts.Subtitle, fonts.White].join(' ')}>
                <span className={classes.navLink}>ACTIVE</span>
                <span className={classes.navLink}>MLS SEARCH</span>
                <span className={classes.navLink}>SOLD</span>
                <span className={classes.navLink}>CONTACT</span>
            </div>
            <div className={[classes.Button, fonts.Caption, fonts.White].join(' ')} onClick={props.click}>
                LET'S START
            </div>
        </div>
        <div className={classes.SearchWrapper}>
            <p className={[classes.SearchText, fonts.H2, fonts.White].join(' ')}>Let us find your next Home</p>
            <input 
                type='text' 
                className={[classes.SearchInput, fonts.Caption, fonts.Gold].join(' ')} 
                placeholder="Price, Neighborhood, City, Country"/>
            <div className={[classes.SearchButton, fonts.Caption, fonts.White].join(' ')} onClick={props.click}>
                Search
            </div>
        </div>
    </div>
)

export default heroImage;