import React, {Component} from 'react'
import classes from './About.module.css'

class About extends Component{

    componentDidMount(){
        let findingTag = this.props.location.search.slice(1)
        document.getElementById(findingTag).scrollIntoView()
    }

    render(){
        return (
            <div className={classes.About}>
                <div className={classes.AboutSession}  id="about">
                    <p>About page</p>
                    <p>About session</p>
                </div>
                <div className={classes.TeamSession} id="team">
                    <p>Team session</p>
                </div>
            </div>
        )
    }
    
}

export default About