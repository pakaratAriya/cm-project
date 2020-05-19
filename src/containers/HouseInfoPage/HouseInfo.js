import React from 'react'
import NavigationText from '../../components/NavigationText/NavigationText'
import classes from './HouseInfo.module.css'
import PageInfoNavigation from './PageInfoNavigation/PageInfoNavigation'
import fonts from '../../globalCss/Fonts.module.css'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'
import UpdateInfoSession from '../../components/UpdateInfoSession/UpdateInfoSession'
import Header from '../../components/Header/Header'

class HouseInfo extends React.Component{
    state = {
        curIndex: 0,
        allImageNames: [
            "gallery-0.png","gallery-1.png","gallery-2.png","gallery-3.png",
            "gallery-4.png","gallery-5.png","gallery-6.png","gallery-7.png",
            "gallery-8.png","gallery-9.png","gallery-10.png","gallery-11.png",
            "gallery-12.png","gallery-13.png",
        ],
        loading: false
    }

    onClickSmallImageHandler = index => {
        this.setState({curIndex: index, loading: true})
        setTimeout(()=>this.setState({loading: false}), 300)
    }

    render(){
        return (
            <React.Fragment>
                <Header/>
                <NavigationText/>
                <div className={fonts.Title}>8600 BURNABY LAKE</div>
                <div className={classes.BigImage}
                    style={{
                        backgroundImage: "url('/images/PageInfoImages/" + this.state.allImageNames[this.state.curIndex] + "')",
                        opacity: this.state.loading ? "0" : "1"
                    }}>
                            
                </div>
                <PageInfoNavigation/>
                <div className={classes.SmallImageWrapper}>

                
                {this.state.allImageNames.map((imageName,index)=>(
                    <div className={classes.SmallImage}
                        key={index}
                        style={{
                            backgroundImage: "url('/images/PageInfoImages/" + imageName + "')"
                        }}
                        onClick={()=>this.onClickSmallImageHandler(index)}>

                    </div>
                ))}
                </div>
                <div className={classes.ContentWrapper}>
                Big, bright, updated 3-storey home in a fabulous block near Main Street. 3 updated
                 suites with 2 rented to great tenants. Lots of great options: perfect for owner occupiers 
                 who want to live in one and pay down the mortgage, a smart investor or convert back
                  to a single family home with 3 bedrooms up and a suite. Main floor has 2 bedrooms, high
                   ceilings, an updated kitchen & bath & opens to a fabulous deck & backyard oasis. Big 2
                    bedroom basement suite was completely redone in 2008 and the 1 bedroom top floor 
                    suite is adorable and ready to move in. Updated wiring, plumbing, roof - an excellent 
                    investment for the future.
                </div>
                <div className={classes.PriceInfo}>
                    <div className={classes.Price}>$ 1,798,000</div>
                    <table>
                        <tbody>
                        <tr>
                            <th className={classes.PropsHeader}>Properties Type</th><td>Residential Detached</td>
                        </tr>
                        <tr>
                            <th className={classes.PropsHeader}>MLS&reg; Number</th><td>R2452265</td>
                        </tr>
                        <tr>
                            <th className={classes.PropsHeader}>Status</th><td>Active</td>
                        </tr>
                        <tr>
                            <th className={classes.PropsHeader}>Bedrooms</th><td>3</td>
                        </tr>
                        <tr>
                            <th className={classes.PropsHeader}>Year Built</th><td>1990</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.HouseDetail}>

                </div>
                <UpdateInfoSession/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }
    
}

export default HouseInfo