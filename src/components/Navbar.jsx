import React, { useContext, useEffect } from 'react'
import { SiHomeassistant } from 'react-icons/si'
import { hamburgerContext, yPosContext } from '../context/global-state'

import '../styles/navbar.css'

function Navbar() {
    const { yPos, setYPos } = useContext(yPosContext)
    const { hamburgerToggle, setHamburgerToggle } = useContext(hamburgerContext)

    useEffect(() => {
        if(yPos > 0) {
            setHamburgerToggle(false)
        }
    }, [yPos])

    return (
        <>
            <div className='navbar-parent' style={{ opacity: `${1 - yPos*0.008}` }}>
                <a href='/' className='company' style={{ transform: `translateX(-${yPos * 4}px)` }}>
                    <SiHomeassistant className='logo'></SiHomeassistant>
                    <h2>Company Name</h2>
                </a>
                <div className='hamburger' onClick={() => {
                    hamburgerToggle ? setHamburgerToggle(false) : setHamburgerToggle(true) 
                }}>
                    <div className={hamburgerToggle ? 'bar bar-1' : "bar"}></div>
                    <div className={hamburgerToggle ? 'bar bar-2' : "bar"}></div>
                    <div className={hamburgerToggle ? 'bar bar-3' : "bar"}></div>
                </div>
                <div className='navigation' style={{ transform: `translateX(${yPos * 4}px)` }}>
                    <h3 className='link'>
                        <a href='/'>
                            Home
                        </a>    
                    </h3>
                    <h3 className='link'>
                        <a href='/portofolio'>
                            Portfolio
                        </a>    
                    </h3>
                    <h3 className='link'>
                        <a href='/#contact'>
                            Contact
                        </a>    
                    </h3>
                </div>
            </div>
            <div className={hamburgerToggle ? "navigation-mobile show-nav" : "navigation-mobile"} >
                <h3 className='link-mobile'>
                    <a href='/'>
                        Home
                    </a>    
                </h3>
                <h3 className='link-mobile'>
                    <a href='/#contact'>
                        Contact
                    </a>    
                </h3>
                <h3 className='link-mobile'>
                    <a href='/portofolio'>
                        Portfolio
                    </a>    
                </h3>
            </div>
        </>
    )
}

export default Navbar