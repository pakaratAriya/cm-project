import React from 'react'
import classes from './HeroImage.module.css'
import fonts from '../../../globalCss/Fonts.module.css'
import Button from '../../Button/Button'

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
            <Button 
                myClass={["mediumBtn", "goldBorder", "transparentBackground", "whiteText"]} 
                style={{
                    gridColumn: "20/24",
                    alignSelf: "end"
                }}>LET'S START</Button>
        </div>
        <div className={classes.SearchWrapper}>
            <p className={[classes.SearchText, fonts.H2, fonts.White].join(' ')}>Let us find your next Home</p>
            <input 
                type='text' 
                className={[classes.SearchInput, fonts.Caption, fonts.Gold].join(' ')} 
                placeholder="Price, Neighborhood, City, Country"/>
            <Button
                myClass={["smallBtn", "goldBorder", "goldBackground", "whiteText"]}
                style={{
                    gridColumn: "20/24",
                    display: "inline-block",
                    marginLeft: "20px"
                }}>Search</Button>
        </div>
    </div>
)

export default heroImage;