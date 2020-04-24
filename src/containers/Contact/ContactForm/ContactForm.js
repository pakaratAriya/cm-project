import React, {Component} from 'react'
import classes from './ContactForm.module.css'

class ContactForm extends Component {
    render(){
        return(
            <div className={classes.ContactForm}>
                <p className={classes.Label}>Name</p>
                <input className={classes.oneLineInput} placeholder="John Doe" required/>
                <p className={classes.Label}>How can I help</p>
                <input className={classes.oneLineInput} required placeholder="Need"/>
                <p className={classes.Label}>E-mail</p>
                <input className={classes.oneLineInput} type="email" required placeholder="name@email.com"/>
                <p className={classes.Label}>Message</p>
                <textarea className={classes.textField} required placeholder="Write here"/>
                <div className={classes.Button} onClick={this.props.click}>
                    Send
                </div>
            </div>
        )
    }
}

export default ContactForm