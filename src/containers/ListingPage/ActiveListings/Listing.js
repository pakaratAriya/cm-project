import React, {Component} from 'react'
import classes from './Listing.module.css'
import fonts from '../../../globalCss/Fonts.module.css'
import Header from '../../../components/Header/Header'
import NavigationText from '../../../components/NavigationText/NavigationText'
import Contact from '../../Contact/Contact'
import SearchBar from '../SearchBar/SearchBar'
import Footer from '../../../components/Footer/Footer'
import ListingGallery from '../ListingGallery/ListingGallery'
import ListingPageNavigation from '../ListingPageNavigation/ListingPageNavigation'
import imagePlaceholder from '../../../DataPlaceholder/imagePlaceholder'

class Listing extends Component{
    state = {
        allImages: imagePlaceholder,
        nameSearch: "",
        priceMin: 0,
        priceMax: Infinity,
        loading: false
    }

    onSearchHandler = (place) => {
        console.log(place)
        const fullArray = [...imagePlaceholder]
        let sortArray = fullArray;
        if(place.trim()!=="")
            sortArray = fullArray.filter(obj=>obj.place.toLowerCase().includes(place.toLowerCase()))
        sortArray = sortArray.filter(obj=>(obj.price <= this.state.priceMax && obj.price >= this.state.priceMin))
        this.setState({ loading: true})
        setTimeout(()=>{
            this.setState({allImages: sortArray, loading: false})
        },300)
    }

    onChangePriceHandler = (min,max) =>{
        const fullArray = [...imagePlaceholder]
        this.setState({priceMin: min, priceMax: max})
        let sortArray = fullArray.filter(obj=>(obj.price <= max && obj.price >= min))
        if(this.state.nameSearch.trim()!=="")
            sortArray = sortArray.filter(obj=>{
                return (obj.place.toLowerCase()).includes(this.state.nameSearch.toLowerCase())}
                )
        this.setState({ loading: true})
        setTimeout(()=>{
            this.setState({allImages: sortArray,loading: false})
        },300)

    }

    onChangeSearchHandler= (e) =>{
        this.setState({nameSearch: e.target.value})
    }


    render(){
        return (
            <React.Fragment>
                <Header/>
                <NavigationText/>
                <div className={fonts.Title}>{this.props.isActive ? "EXCLUSIVE LISTINGS" : "MSL LISTINGS"}</div>
                <SearchBar  onSearch={this.onSearchHandler} 
                            onChangePrice={this.onChangePriceHandler} 
                            onChangeSearch={this.onChangeSearchHandler}
                            currentSearch={this.state.nameSearch}/>
                <ListingGallery allImages={this.state.allImages} loading={this.state.loading}/>
                <ListingPageNavigation pageNumber={1}/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }

}

export default Listing