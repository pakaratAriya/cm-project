import React, {Component} from 'react'
import Button from '../../../components/Button/Button'
import classes from './ContactForm.module.css'
import fonts from '../../../globalCss/Fonts.module.css'

class ContactForm extends Component {
    render(){
        return(
            <div className={[classes.ContactForm, fonts.Subtitle, fonts.Gold].join(' ')}>
                <div className={classes.FirstName}>
                    <p className={[classes.Label, fonts.Captions].join(' ')}>First Name*</p>
                    <input className={[classes.oneLineInput, fonts.Gold].join(' ')} placeholder="" required/>
                </div>
                <div className={classes.LastName}>
                    <p className={[classes.Label, fonts.Captions].join(' ')}>Last Name*</p>
                    <input className={[classes.oneLineInput, fonts.Gold].join(' ')} placeholder="" required/>
                </div>
                <div className={classes.Email}>
                    <p className={[classes.Label, fonts.Captions].join(' ')}>Email Address*</p>
                    <input className={[classes.oneLineInput, fonts.Gold].join(' ')} placeholder="" required/>
                </div>
                <div className={classes.Subject}>
                    <p className={[classes.Label, fonts.Captions].join(' ')}>Subject*</p>
                    <input className={[classes.oneLineInput, fonts.Gold].join(' ')} placeholder="" required/>
                </div>
                <div className={classes.Phone}>
                    <p className={[classes.Label, fonts.Captions].join(' ')}>Phone*</p>
                    <input className={[classes.oneLineInput, fonts.Gold].join(' ')} placeholder="###-###-####" required/>
                </div>
                <div className={classes.Message}>
                    <p className={[classes.Label, fonts.Captions].join(' ')}>Message*</p>
                    <textarea className={[classes.textField, fonts.Gold].join(' ')} placeholder="" required/>
                </div>
                <Button
                    myClass={["smallBtn", "goldBorder", "transparentBackground", "whiteText"]}
                    style={{
                        gridColumn: "11/13",
                        marginTop: "20px",
                        marginRight: "10px",
                        justifySelf: "end"
                    }}
                >Send</Button>
            </div>
        )
    }
}

export default ContactForm