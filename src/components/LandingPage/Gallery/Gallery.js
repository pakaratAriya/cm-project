import React, {Component} from 'react'
import classes from './Gallery.module.css'
import fonts from '../../../globalCss/Fonts.module.css'


const galleryList = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg","gallery4.jpg","gallery5.jpg"]
const galleryLocations = ["Vancouver BC","Vancouver BC","Vancouver BC", "Vancouver BC", "Vancouver BC"]
const galleryPrice = ["$1,000,000.00", "$4,000,000.00", "$15,000,000.00", "$20,000,000.00", "$10,000,000.00"]

const gallery = props => (
    <div className={classes.Gallery} 
                style={{
                    gridTemplateColumns: "repeat(" + galleryList.length + ", 33.333%)"
                    }}>
                {
                    galleryList.map((g, index)=>(
                        <div key={index} className={[classes.ListItem, fonts.Subtitle, fonts.White].join(' ')} 
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


export default gallery