import React from 'react'
import logo from '../assets/streamsyLogo.png'
import { Link } from 'react-router-dom'

function Logo(
    className,
    ...props
) {
    return (
        <div className={`m-1 px-1 ${className}`}>
            <Link to="/" {...props}><img src={logo} alt='Video'></img></Link>
        </div>
    )
}

export default Logo