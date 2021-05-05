import React from 'react'
import Logo from "../assets/logo.svg";
import './sidebar.css';

const sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <img src={Logo} alt="Logo" />
            </div>
        </>
    )
}

export default sidebar
