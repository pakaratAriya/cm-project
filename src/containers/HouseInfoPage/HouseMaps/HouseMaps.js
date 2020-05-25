import React, {Component} from 'react'
import Header from '../../../components/Header/Header'
import NavigationText from '../../../components/NavigationText/NavigationText'
import PageInfoNavigation from '../PageInfoNavigation/PageInfoNavigation'
import UpdateInfoSession from '../../../components/UpdateInfoSession/UpdateInfoSession'
import Contact from '../../Contact/Contact'
import Footer from '../../../components/Footer/Footer'
import classes from './HouseMaps.module.css'
import fonts from '../../../globalCss/Fonts.module.css'

class HouseMaps extends Component{
    state = {
        gallery: ["map.png"],
        indexType: 0
    }

    mapTypes = ["Map", "Walk Score", "Street View"]

    onSelectHandler = key =>{
        this.setState({indexType: key})
    }

    render(){
        return (
            <React.Fragment>
                <Header/>
                <NavigationText/>
                <div className={fonts.Title}>8600 BURNABY LAKE</div>
                <PageInfoNavigation activeIndex={2}/>
                <div className={classes.GalleryWrapper}>
                {this.state.gallery.map((imgName, index)=>{
                    console.log(imgName)
                    return (
                        <div className={classes.Photo}
                        key={index}
                        style={{
                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/PageInfoImages/Maps/${imgName}')`
                        }}>

                    </div>
                    )
                })}
                </div>
                <div className={classes.MapTypeWrapper}>
                    {this.mapTypes.map((content, index)=>{
                        return(
                            <div key={index} 
                                className={index==this.state.indexType ? 
                                    [classes.TypeText, classes.SelectedType].join(' ') : 
                                    classes.TypeText}
                                onClick={()=>this.onSelectHandler(index)}>
                                {content}
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

export default HouseMaps