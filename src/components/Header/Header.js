import React from 'react'
import {withRouter, Link} from 'react-router-dom'

const header = props => {
    const urls = props.location.pathname.split('/')
    urls[0] = "home"
    return (
        <div>
            {urls.map((n,index)=>{
                return (
                    n !== "" ?
                    <span key={index}>
                        {index !== 0 && index !== (n.length - 1) ? <span> >> </span> : null}
                        <Link  to={"/" + (n === "home" ? "" : n)}>{n}</Link></span>
                        : null
                )
            })}
        </div>
    )
}

export default withRouter(header)