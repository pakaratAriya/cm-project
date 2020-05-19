import React from 'react'
import classes from './SearchBar.module.css'

const searchBar = props => {
    return (
        <div className={classes.SearchBar}>
            <span className={classes.Header}>Search all properties</span>
            <input className={classes.CityInput} placeholder="Enter city or community"/>
            <select className={classes.Select}>
                <option disabled selected hidden>Price Range</option>
                <option>1000000-19999999</option>
                <option>2000000-99999999</option>
                <option>over 1000000</option>
            </select>
            <select className={classes.Select}>
                <option disabled selected hidden>Bedrooms</option>
                <option>2 Bedrooms</option>
                <option>3 Bedrooms</option>
                <option>over 4 Bedrooms</option>
            </select>
            <select className={classes.Select}>
                <option disabled selected hidden>Bathrooms</option>
                <option>2 Bathrooms</option>
                <option>3 Bathrooms</option>
                <option>over 4 Bathrooms</option>
            </select>
        </div>
    )
}

export default searchBar