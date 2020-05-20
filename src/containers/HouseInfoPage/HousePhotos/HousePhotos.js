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
            "gallery-1.png",
            "gallery-2.png",
            "gallery-3.png",
            "gallery-4.png",
            "gallery-5.png",
            "gallery-6.png",
            "gallery-7.png",
            "gallery-8.png",
            "gallery-9.png",
            "gallery-10.png",
            "gallery-11.png",
            "gallery-12.png",
            "gallery-14.png",
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
                            backgroundImage: "url('/images/PageInfoImages/Photos/" + imgName + "')"
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