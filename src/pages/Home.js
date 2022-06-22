import React, { useContext, useEffect, useState } from 'react'
import { FaLinkedin, FaInstagram} from 'react-icons/fa'
import { yPosContext } from '../context/global-state'
import './home.css'

function Home() {
    const { yPos, setYPos } = useContext(yPosContext)
    const handleScroll = () => setYPos(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='home-parent'>
            <div className='hero'>
                <div className="bg-image">
                    <div className="darken"></div>
                    <img src="./project/hero-banner.jpg"></img>
                </div>
                <div className='hero-content'>
                    <h1 style={{ transform: `translateX(-${yPos * 0.5}px)` }}>Designed with passion</h1>
                    <p style={{ transform: `translateX(-${yPos * 0.3}px)` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan. </p>
                    <div className='button-parent' style={{ transform: `translateX(-${yPos * 1}px)` }}>
                        <div className='button'>
                            <div className='box'></div>
                            <h3><a href="#">Our Works</a></h3>
                        </div>
                        <div className='button'>
                            <div className='box'></div>
                            <h3><a href="#">Contact Us</a></h3>
                        </div>
                    </div>
                </div>
                <div className='social-media'  style={{ opacity: `${1 - yPos*0.005}` }}>
                    <FaInstagram className='icon'><a href='#'></a></FaInstagram>
                    <FaLinkedin className='icon'><a href='#'></a></FaLinkedin>
                </div>
            </div>
            <div className='works'>
                
            </div>
            <div className='contact'></div>
        </div>
    )
}

export default Home