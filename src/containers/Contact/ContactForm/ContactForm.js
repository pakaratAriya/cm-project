import React, {Component} from 'react'
import Button from '../../../components/Button/Button'
import classes from './ContactForm.module.css'
import Footer from '../../../components/Footer/Footer'
import fonts from '../../../globalCss/Fonts.module.css'

class ContactForm extends Component {
    render(){
        return(
            <div>
                <div className={classes.NameWrapper}>
                    <p className={classes.Label}>First Name*</p>
                    <input className={classes.NameInput} placeholder="abc" required/>
                </div>
                <div className={classes.NameWrapper}>
                    <p className={classes.Label}>Last Name*</p>
                    <input className={classes.NameInput} placeholder="" required/>
                </div>
                <div className={classes.ContactInputWrapper}>
                    <p className={classes.Label}>Email Address*</p>
                    <input className={classes.ContactInput} placeholder="" required/>
                </div>
                <div className={classes.ContactInputWrapper}>
                    <p className={classes.Label}>Subject*</p>
                    <input className={classes.ContactInput} placeholder="" required/>
                </div>
                <div className={classes.ContactInputWrapper}>
                    <p className={classes.Label}>Phone*</p>
                    <input className={classes.ContactInput} placeholder="###-###-####" required/>
                </div>
                <div className={classes.MessageWrapper}>
                    <p className={classes.Label}>Message*</p>
                    <textarea className={classes.MessageInput} placeholder="" required/>
                </div>
                <Button
                    myClass={["smallBtn", "goldBorder", "transparentBackground", "whiteText"]}
                    style={{
                        float: 'right',
                        marginTop: "30px"
                    }}
                >Send</Button>
            </div>
        )
    }
}

export default ContactForm