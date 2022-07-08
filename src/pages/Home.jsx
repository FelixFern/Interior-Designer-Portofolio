import React, { useContext, useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { yPosContext, hamburgerContext, portfolioContext, carouselContext } from '../context/global-state'
import AOS from 'aos';
import emailjs from '@emailjs/browser';

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

    function mailToHandler() {
        const Form = document.forms[0];

        emailjs.sendForm('gmail', 'designauto', Form, '_QS-FGYxuYv6b_BGT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        Form.reset();
    }

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
                    <a href={identity.identity[1].link}><FaWhatsapp className='icon'></FaWhatsapp></a>
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
            <div className='contact-parent' id='contact'>
                <div className='contact-content left-side'>
                    <h2 data-aos="fade-right">CONTACT US</h2>
                    <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan.</p>
                    <p data-aos="fade-right">Get in touch with us.</p>
                    <form className='contact-form'>
                        <input data-aos="fade-right" type='text' placeholder='NAME' name="name"></input>
                        <input data-aos="fade-right" type='email' placeholder='EMAIL' name="email"></input>
                        <input data-aos="fade-right" type='number' placeholder='PHONE NUMBER' name="number"></input>
                        <input data-aos="fade-right" type='text' placeholder='MESSAGE' className='message' name="message"></input>
                    </form>
                    <h3 className='btn-white' data-aos="fade-up">
                        <a onClick={mailToHandler}>
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
            <div className='vision-parent'>
                <div className='vision-content'>
                    <img src="./project/hero-banner.jpg" className='vision-img'></img>
                    <div className='vision'>
                        <h2 data-aos='fade-down'>Lorem Ipsum</h2>
                        <p data-aos='fade-down'>Minim ex qui deserunt ex velit. Cupidatat exercitation veniam commodo elit ex reprehenderit adipisicing laborum aliqua deserunt cillum. Minim quis tempor magna consequat eu aliquip eu sunt aute. Non eu sunt ad labore elit irure mollit.

Aute duis non excepteur excepteur duis. Esse ea ut Lorem laborum ex ut nisi voluptate do quis duis consectetur magna do. Ut non adipisicing cupidatat minim. Excepteur fugiat ea nulla ipsum do veniam amet Lorem anim cupidatat magna est commodo. Ullamco cupidatat elit sunt qui adipisicing elit ipsum mollit qui. Irure aute elit dolore mollit esse culpa. Officia id officia incididunt qui reprehenderit ullamco tempor.

Nostrud Lorem incididunt cillum duis. Elit dolore eu ipsum mollit sit est duis nisi cillum nisi non. Do do sit id ut consectetur minim sint qui tempor incididunt nisi sit officia laboris. Irure cillum aute laboris consectetur id ullamco aute laboris ut ut. Dolore sit aute consequat do. Ea ullamco velit labore non sint tempor nostrud aliquip laboris voluptate est fugiat tempor.

Aliquip incididunt irure dolore adipisicing proident. Consequat anim officia ut duis reprehenderit est irure consequat esse ex. Dolor enim mollit dolore exercitation cillum duis mollit dolore ea aliqua esse. Irure anim cupidatat occaecat veniam anim deserunt amet nulla veniam minim qui quis anim adipisicing. Commodo pariatur nostrud minim dolore dolore irure occaecat mollit consectetur duis exercitation aute labore. Ipsum duis sint anim dolor minim magna minim proident Lorem. Adipisicing cillum aliquip nisi officia irure velit reprehenderit quis cillum fugiat.

Est non eu officia id officia est in. Sit id eiusmod nulla esse excepteur eiusmod deserunt cupidatat. Commodo exercitation amet quis est reprehenderit dolore proident irure deserunt consequat consectetur voluptate dolore. Veniam nostrud nisi in et dolore non duis sunt esse pariatur in do quis. Do amet laborum incididunt exercitation sunt quis aliqua ipsum quis enim minim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home