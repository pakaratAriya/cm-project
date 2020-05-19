import React, {Component} from 'react'
import Header from '../../../components/Header/Header'
import NavigationText from '../../../components/NavigationText/NavigationText'
import PageInfoNavigation from '../PageInfoNavigation/PageInfoNavigation'
import UpdateInfoSession from '../../../components/UpdateInfoSession/UpdateInfoSession'
import Contact from '../../Contact/Contact'
import Footer from '../../../components/Footer/Footer'
import classes from './HouseVideos.module.css'
import fonts from '../../../globalCss/Fonts.module.css'

class HouseVideos extends Component{
    state = {
        gallery: ["gallery-13.png"]
    }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <NavigationText/>
                <div className={fonts.Title}>8600 BURNABY LAKE</div>
                <PageInfoNavigation activeIndex={1}/>
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

export default HouseVideos