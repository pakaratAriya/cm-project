import React, {Component} from 'react'
import ContactForm from './ContactForm/ContactForm'
import Button from '../../components/Button/Button'
import {withRouter} from 'react-router-dom'
import classes from './Contact.module.css'
import fonts from '../../globalCss/Fonts.module.css'

class Contact extends Component{

    render(){
        return(
            <div className={[classes.Contact, fonts.White].join(' ')}>
                <div className={classes.ContactInfo}>
                    <p className={fonts.H2}>We are here to help<br/>send us a message</p>
                    <p className={fonts.Caption}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in uienply
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit
                    </p>
                    {/* <div className={[classes.Button, fonts.Caption, fonts.Gold].join(' ')} onClick={this.props.click}>
                        More
                    </div> */}
                    <Button
                        myClass={["mediumBtn", "goldBorder", "transparentBackground", "goldText"]}
                        click={()=>{
                            this.props.history.push("/contact")
                        }}
                    >More</Button>
                    <Button
                        myClass={["mediumBtn", "goldBorder", "transparentBackground", "goldText"]}
                        click={()=>{
                            this.props.history.push("/contact")
                        }}
                    >LETS TRY</Button>
                </div>
                <ContactForm/>
            </div>
        )
    }
}

export default withRouter(Contact)