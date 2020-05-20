import React from 'react'
import classes from './SearchBar.module.css'

const searchBar = props => {
    return (
        <div className={classes.SearchBar}>
            <span className={classes.Header}>Search all properties</span>
            <input className={classes.CityInput} 
                placeholder="Enter city or community" 
                value={props.currentSearch}
                onChange={(e)=>props.onChangeSearch(e)}
                onKeyDown={(e)=>{
                    if(e.which==13){
                        props.onSearch(e.target.value)
                    }
                }}
                />
            <select className={classes.Select} onChange={(e)=>{
                    const vals = e.target.value.split(',')
                    props.onChangePrice(vals[0],vals[1])
                    
                    }}>
                <option disabled selected hidden>Price Range</option>
                <option value={[1000000, 1999999]}>1000000-1999999</option>
                <option value={[2000000, 9999999]}>2000000-9999999</option>
                <option value={[10000000, Infinity]}>over 10000000</option>
                <option value={[0, Infinity]}>All price</option>
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