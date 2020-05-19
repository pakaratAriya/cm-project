import React from 'react'
import Image from '../../../components/Image/Image'
import classes from './ListingGallery.module.css'

const listingGallery = props => (
    <div className={classes.ListingGallery}>
        {
            props.allImages.map(imageName=>{
                return <Image src={imageName}/>
            })
        }
    </div>
)

export default listingGallery