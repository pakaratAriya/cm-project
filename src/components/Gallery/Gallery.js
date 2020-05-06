import React from 'react'
import classes from './Gallery.module.css'
import fonts from '../../globalCss/Fonts.module.css'

const gallery = props => {
    const galleryList = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"]
    const galleryLocations = ["Vancouver BC","Vancouver BC","Vancouver BC"]
    const galleryPrice = ["$1,000,000.00", "$4,000,000.00", "$15,000,000.00"]
    return (
        <div className={classes.Gallery}>
            {
                galleryList.map((g, index)=>(
                    <div className={[classes.ListItem, fonts.Subtitle, fonts.White].join(' ')} 
                        style={{gridColumn: (index+1) + "/" + (index+2),
                        backgroundImage: "url('/images/" + g + "')",
                        backgroundSize: "cover",}}>
                        <p className={fonts.H2}>{galleryLocations[index]}</p>
                        <p>{galleryPrice[index]}</p>
                        <p>Welcome Home</p>
                    </div>
                ))
            }
        </div>
        
    )
}

export default gallery