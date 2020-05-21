import React from 'react'
import Image from '../../../components/Image/Image'
import classes from './ListingGallery.module.css'

const listingGallery = props => (
    <div className={classes.ListingGallery} style={{
        opacity: props.loading ? "0" : "1"
    }}>
        {
            props.allImages.length === 0 ?
            <div className={classes.NoResultText}>No result...</div>
            :
            props.allImages.map(image=>{
                return <Image src={image.url} place={image.place} price={image.price}/>
            })
        }
    </div>
)

export default listingGallery