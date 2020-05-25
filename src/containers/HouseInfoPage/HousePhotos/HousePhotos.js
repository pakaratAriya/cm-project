import React, {Component} from 'react'
import Header from '../../../components/Header/Header'
import NavigationText from '../../../components/NavigationText/NavigationText'
import PageInfoNavigation from '../PageInfoNavigation/PageInfoNavigation'
import UpdateInfoSession from '../../../components/UpdateInfoSession/UpdateInfoSession'
import Contact from '../../Contact/Contact'
import Footer from '../../../components/Footer/Footer'
import classes from './HousePhotos.module.css'
import fonts from '../../../globalCss/Fonts.module.css'

class HousePhotos extends Component{
    state = {
        gallery: [
            "gallery-13.png",
            "gallery-13.jpg",
            "gallery-1.jpg",
            "gallery-2.jpg",
            "gallery-3.jpg",
            "gallery-4.jpg",
            "gallery-5.jpg",
            "gallery-6.jpg",
            "gallery-7.jpg",
            "gallery-8.jpg",
            "gallery-9.jpg",
            "gallery-10.jpg",
            "gallery-11.jpg",
            "gallery-12.jpg",
            
        ]
    }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <NavigationText/>
                <div className={fonts.Title}>8600 BURNABY LAKE</div>
                <PageInfoNavigation activeIndex={0}/>
                <div className={classes.GalleryWrapper}>
                {this.state.gallery.map((imgName, index)=>{
                    return (
                        <div className={classes.Photo}
                        key={index}
                        style={{
                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/PageInfoImages/HousePhotos/${imgName}')`
                        }}>

                    </div>
                    )
                })}
                </div>
                <UpdateInfoSession/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }
    
}

export default HousePhotos