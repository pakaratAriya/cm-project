import React from 'react'
import Button from '../../Button/Button'
import classes from './About.module.css';
import {withRouter} from 'react-router-dom'
import fonts from '../../../globalCss/Fonts.module.css'


const About = props => (
    <div className={classes.About}>
        <div className={classes.AboutPhoto}>
        </div>
        <div className={classes.AboutSession}>
            <p className={[classes.AboutTitle, fonts.H2, fonts.Gold].join(' ')}>Andrea Castro</p>
            <p className={[classes.AboutMessage, fonts.Caption, fonts.White].join(' ')}>
                In the local real estate market, Vancouver real estate agent Andrea Castro is
                renowned among colleagues and clients alike for her integrity, loyalty and
                professionalism. Andrea Castro is achieving extraordinary goals in record
                breaking time. Andrea is committed to her family and field an agent with skilled
                negotiating techniques she offers uncanny local exposure. As a Buyer’s and
                Seller’s agent at Homeland Realty, Andrea is committed to offering her clients
                the highest quality representation and professionalism along with superb
                customer service and individualized marketing strategies while understanding
                the needs of her clients. Andrea’s personable and professional character allows
                her to build and maintain solid relationships.
            </p>
            <p className={[classes.AboutMessage, fonts.Caption, fonts.White].join(' ')}>
                Since becoming a Realtor in 2005 in Vancouver, Canada. Andrea has been
                involved in many transactions in the real estate business. Andrea prides herself
                on being a one-stop-shop for buyers and sellers, providing an experience to her
                clientele that is professional, personal always keeping her clients’ goals and
                expectations as priority, allowing her to build and maintain solid relationships
                that continue to be return clients.
            </p>
            <div className={classes.AboutButtons}>
                <Button
                    myClass={["mediumBtn", "goldBorder", "transparentBackground", "goldText"]}
                    click={()=>{
                        props.history.push({
                            pathname: '/about',
                            search: "about"
                        })
                    }}
                    >Learn More</Button>
                <Button
                    myClass={["mediumBtn", "goldBorder", "transparentBackground", "goldText"]}
                    click={()=>{
                        props.history.push({
                            pathname: '/about',
                            search: "team"
                        })
                    }}
                    >Team</Button>
            </div>
        </div>
        
    </div>
)

export default withRouter(About);