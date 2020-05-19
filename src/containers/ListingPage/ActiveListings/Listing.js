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


    render(){
        return (
            <React.Fragment>
                <Header/>
                <NavigationText/>
                <div className={fonts.Title}>{this.props.isActive ? "EXCLUSIVE LISTINGS" : "MSL LISTINGS"}</div>
                <SearchBar/>
                <ListingGallery allImages={imagePlaceholder}/>
                <ListingPageNavigation pageNumber={1}/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }

}

export default Listing