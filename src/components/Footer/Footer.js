import React from 'react'
import classes from './Footer.module.css'

const footer = props => (
    <div className={classes.Footer}>
        <div className={classes.GridWrapper}>
            <div className={[classes.ContactUs, classes.FooterText].join(' ')}>
                <p className={classes.Subtitle}>CONTACT US</p>
                <p>+44 345 678 903</p>
                <p>adobexd@mail.com</p>
                <p>Find a Store</p>
            </div>
            <div className={[classes.Service, classes.FooterText].join(' ')}>
                <p className={classes.Subtitle}>CUSTOMER SERVICE</p>
                <p>Contact Us</p>
                <p>Ordering & Payment</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>FAQ</p>
            </div>
            <div className={[classes.Information, classes.FooterText].join(' ')}>
                <p className={classes.Subtitle}>INFORMATION</p>
                <p>About Adobe XD Kit</p>
                <p>Work With US</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Press Enquiries</p>
            </div>
            <div className={[classes.Subscribe, classes.FooterText].join(' ')}>
                <p className={classes.Subtitle}>Subscribe to AdobeXD via Email</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                <input className={classes.oneLineInput} type="email" required placeholder="Email Address"/>
                <div className={classes.Button} onClick={props.click}>
                    Subscribe
                </div>
                <span className={classes.Trademark}>© AdobeXD Kit 2017</span>
            </div>
        </div>
    </div>
)

export default footer