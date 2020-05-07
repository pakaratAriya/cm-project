import React from 'react'
import Button from '../Button/Button'
import classes from './Footer.module.css'
import fonts from '../../globalCss/Fonts.module.css'

const footer = props => (
    <div className={classes.Footer}>
        <div className={[classes.GridWrapper, fonts.Caption, fonts.Gold].join(' ')}>
            <div className={classes.ContactUs}>
                <p className={classes.Subtitle}>CONTACT US</p>
                <p>+44 345 678 903</p>
                <p>adobexd@mail.com</p>
                <p>Find a Store</p>
            </div>
            <div className={classes.Service}>
                <p className={classes.Subtitle}>CUSTOMER SERVICE</p>
                <p>Contact Us</p>
                <p>Ordering & Payment</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>FAQ</p>
            </div>
            <div className={classes.Information}>
                <p className={classes.Subtitle}>INFORMATION</p>
                <p>About Adobe XD Kit</p>
                <p>Work With US</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Press Enquiries</p>
            </div>
            <div className={classes.Subscribe}>
                <p className={classes.Subtitle}>Subscribe to AdobeXD via Email</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                <input className={classes.oneLineInput} type="email" required placeholder="Email Address"/>
                {/* <div className={[classes.Button, fonts.Caption].join(' ')} onClick={props.click}>
                    Subscribe
                </div> */}
                <Button
                    myClass={["smallBtn", "goldBorder", "transparentBackground", "goldText"]}
                    style={{
                        marginLeft: "20px",
                        height: "20px",
                        lineHeight: "20px"
                    }}
                >Subscribe</Button>
                <span className={[classes.Trademark, fonts.Caption].join(' ')}>© AdobeXD Kit 2017</span>
            </div>
        </div>
    </div>
)

export default footer