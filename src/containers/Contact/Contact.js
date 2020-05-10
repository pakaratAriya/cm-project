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
                <p className={fonts.H2}>CONNECT WITH ANDREA</p>
                <p className={[fonts.Caption, fonts.Gold].join(' ')}>
                    {"to inquire about a property or press event, please fill out the form below.".toUpperCase()}
                </p>
                <ContactForm/>
            </div>
        )
    }
}

export default withRouter(Contact)