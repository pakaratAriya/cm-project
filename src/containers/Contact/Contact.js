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
                    <p className={classes.ContactTitle}>CONNECT WITH ANDREA</p>
                    <p className={classes.Caption}>TO INQUIRE ABOUT A PROPERTY OR PRESS EVENT, PLEASE FILL OUT THE FORM BELOW.</p>
                    <ContactForm/>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Contact)