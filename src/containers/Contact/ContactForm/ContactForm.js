import React, {Component} from 'react'
import Button from '../../../components/Button/Button'
import classes from './ContactForm.module.css'
import fonts from '../../../globalCss/Fonts.module.css'

class ContactForm extends Component {
    render(){
        return(
            <div className={[classes.ContactForm, fonts.Subtitle, fonts.Gold].join(' ')}>
                <p className={classes.Label}>Name</p>
                <input className={[classes.oneLineInput, fonts.Gold].join(' ')} placeholder="John Doe" required/>
                <p className={classes.Label}>How can I help</p>
                <input className={[classes.oneLineInput, fonts.Gold].join(' ')} required placeholder="Need"/>
                <p className={classes.Label}>E-mail</p>
                <input className={[classes.oneLineInput, fonts.Gold].join(' ')} type="email" required placeholder="name@email.com"/>
                <p className={classes.Label}>Message</p>
                <textarea className={[classes.textField, fonts.Gold].join(' ')} required placeholder="Write here"/>
                <Button
                    myClass={["mediumBtn", "goldBorder", "transparentBackground", "goldText"]}
                    style={{
                        marginLeft: "calc(37% + 10px)",
                    }}
                >Send</Button>
            </div>
        )
    }
}

export default ContactForm