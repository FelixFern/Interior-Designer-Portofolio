import React, { useContext, useEffect, useState } from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { yPosContext, hamburgerContext, portfolioContext, carouselContext } from '../context/global-state'
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/home.css'

import Carousel from '../components/Carousel';
import Loading from './Loading';
import { type } from '@testing-library/user-event/dist/type';

function Home() {
    const { yPos, setYPos } = useContext(yPosContext)
    const { portfolioData, setPortfolioData } = useContext(portfolioContext)
    const { carouselData, setCarouselData } = useContext(carouselContext)
    const [ identity, setIdentity ] = useState({})
    const [ isLoading, setLoading ] = useState(true)

    const handleScroll = () => setYPos(window.pageYOffset);
    
    fetch("identity.json").then(
        function(res){
            return res.json()
    }).then(
        function(data){
            setIdentity(data)
    }).catch(
        function(err){
            console.log(err, ' error')
        }
    )

    useEffect(() => {
        document.title = "Home - Interior Design Portofolio"
        AOS.init();
        if(typeof portfolioData !== 'undefined') {
            setLoading(false)
        } else {
            setLoading(true)
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    

    useEffect(() => {
        if(typeof identity.identity != 'undefined') {
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [identity])
    if(isLoading) return <Loading></Loading>

    return (
        <div className='home-parent'>
            <div className='hero'>
                <div className="bg-image">
                    <img src="./project/hero-banner.jpg"></img>
                </div>
                <div className='hero-content'>
                    <h1 style={{ transform: `translateX(-${yPos * 0.5}px)` }}>Designed with passion</h1>
                    <p style={{ transform: `translateX(-${yPos * 0.3}px)` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan. </p>
                    <div className='button-parent' style={{ transform: `translateX(-${yPos * 1}px)` }}>
                        <div className='button'>
                            <div className='box'></div>
                            <h3><a href="/portofolio">Our Works</a></h3>
                        </div>
                        <div className='button'>
                            <div className='box'></div>
                            <h3><a href="#contact">Contact Us</a></h3>
                        </div>
                    </div>
                </div>
                <div className='social-media' style={{ opacity: `${1 - yPos*0.0015}` }}>
                    <a href={identity.identity[0].link}><FaInstagram className='icon'></FaInstagram></a>
                    <a href={identity.identity[1].link}><FaLinkedin className='icon'></FaLinkedin></a>
                </div>
            </div>
            <div className='works'>
                <div className='works-title' >
                    <h2 data-aos="fade-down">Our Works</h2>
                </div>
                <div className='carousel-parent'>
                    <Carousel></Carousel>
                </div>
                <div className='see-more'>
                    <h3 data-aos="fade-right">Want to see more ?</h3>
                    <h3 data-aos="fade-left" className='btn-black'>
                        <a href='/portofolio' >
                            Other Works
                        </a>
                    </h3>
                </div>
            </div>
            <div className='vision-parent'>
                <div className='vision-content'>
                    <div className='vision'>
                        <h2 style={{ transform: `translateX(${yPos * 0.06 - 60}px)` }}>Lorem Ipsum</h2>
                        <p style={{ transform: `translateX(${yPos * 0.05 - 50}px)` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan. Mauris id ex nec diam tincidunt cursus. Curabitur pharetra tristique tortor ut semper. Pellentesque arcu risus, ornare id lorem et, faucibus dictum mauris. </p>
                    </div>
                </div>
                <img className='vision-img' src='./project/hero-banner.jpg'></img>
            </div>
            <div className='contact-parent' id='contact'>
                <div className='contact-content left-side'>
                    <h2 data-aos="fade-right">CONTACT US</h2>
                    <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan.</p>
                    <p data-aos="fade-right">Get in touch with us.</p>
                    <form className='contact-form'>
                        <input data-aos="fade-right" type='text' placeholder='NAME'></input>
                        <input data-aos="fade-right" type='email' placeholder='EMAIL'></input>
                        <input data-aos="fade-right" type='number' placeholder='PHONE NUMBER'></input>
                        <input data-aos="fade-right" type='text' placeholder='MESSAGE' className='message'></input>
                    </form>
                    <h3 className='btn-black' data-aos="fade-up">
                        <a href='#'>
                            SUBMIT
                        </a>
                    </h3>
                </div>
                <div className='contact-content right-side'  data-aos="fade-left">
                    <h2>Phone Number</h2>
                    <p>+62-xxx-xxxx-xxxx</p>
                    <h2>Email</h2>
                    <p>loremipsum@lorem.com</p>
                </div>
            </div>
        </div>
    )
}

export default Home