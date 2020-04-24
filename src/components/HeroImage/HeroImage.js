import React from 'react'
import classes from './HeroImage.module.css'

const heroImage = props => (
    <div className={classes.HeroImage}>
        <div className={classes.GridWrapper}>
            <div className={classes.LogoItem}>
                CM
            </div>
            <div className={classes.Navigation}>
                <span className={classes.navLink}>ACTIVE</span>
                <span className={classes.navLink}>MLS SEARCH</span>
                <span className={classes.navLink}>SOLD</span>
                <span className={classes.navLink}>CONTACT</span>
            </div>
            <div className={classes.Button} onClick={props.click}>
                LET'S START
            </div>
        </div>
        <div className={classes.SearchWrapper}>
            <p className={classes.SearchText}>Let us find your next Home</p>
            <input 
                type='text' 
                className={classes.SearchInput} 
                placeholder="Price, Neighborhood, City, Country"/>
            <div className={classes.SearchButton} onClick={props.click}>
                Search
            </div>
        </div>
    </div>
)

export default heroImage;