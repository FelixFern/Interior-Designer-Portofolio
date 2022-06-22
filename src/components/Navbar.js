import React, { useContext } from 'react'
import { SiHomeassistant } from 'react-icons/si'
import { yPosContext } from '../context/global-state'


import './navbar.css'

function Navbar() {
    const { yPos, setYPos } = useContext(yPosContext)
    return (
        <div className='navbar-parent' style={{ opacity: `${1 - yPos*0.008}` }}>
            <div className='company' style={{ transform: `translateX(-${yPos * 4}px)` }}>
                <SiHomeassistant className='logo'></SiHomeassistant>
                <h2>Company Name</h2>
            </div>
            <div className='navigation' style={{ transform: `translateX(${yPos * 4}px)` }}>
                <h3 className='link'>
                    <a href='/'>
                        Home
                    </a>    
                </h3>
                <h3 className='link'>
                    <a href='#contact'>
                        Contact
                    </a>    
                </h3>
                <h3 className='btn-white'>
                    <a href='/porfolio'>
                        Portfolio
                    </a>    
                </h3>
            </div>
        </div>
    )
}

export default Navbar