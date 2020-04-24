import React, {Component} from 'react'
import ContactForm from './ContactForm/ContactForm'
import classes from './Contact.module.css'

class Contact extends Component{

    render(){
        return(
            <div className={classes.Contact}>
                <div className={classes.ContactInfo}>
                    <p className={classes.Subtitle}>We are here to help<br/>send us a message</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in uienply
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit
                    </p>
                    <div className={classes.Button} onClick={this.props.click}>
                        More
                    </div>
                    <div className={classes.Button} onClick={this.props.click}>
                        LET'S TRY
                    </div>
                </div>
                <ContactForm/>
            </div>
        )
    }
}

export default Contact