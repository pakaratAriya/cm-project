import React, {Component} from 'react'
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
                <div className={[classes.Button, fonts.Caption].join(' ')} onClick={this.props.click}>
                    Send
                </div>
            </div>
        )
    }
}

export default ContactForm