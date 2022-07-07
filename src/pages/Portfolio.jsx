import React, { useEffect, useContext, useState } from 'react'
import AOS from 'aos';
import { yPosContext, portfolioContext } from '../context/global-state';

import '../styles/portfolio.css'

import Loading from './Loading';
import CarouselPortofolio from '../components/CarouselPortofolio';

function Portfolio() {
    const default_URL = './project/portfolios'
    const { yPos, setYPos } = useContext(yPosContext)
    const { portfolioData, setPortfolioData } = useContext(portfolioContext)
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => {
        document.title = "Portfolio - Interior Design Portofolio"
        AOS.init()
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    

    const handleScroll = () => setYPos(window.pageYOffset);

    useEffect(() => {
        if(typeof portfolioData.data !== 'undefined') {
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [portfolioData])

    if(isLoading) return <Loading></Loading>

    return (
        <div className='portfolio-parent'>
            <div className='portfolio-title' style={{ transform: `translateY(-${yPos * 0.01}px)` }}>
                <h2>PORTOFOLIO</h2>
            </div>
            <div className='featured-project-parent'>
                <img className='feature-project-bg' 
                    src={default_URL + '/' + portfolioData.data.Years[0] + '/' + encodeURI(portfolioData.data.result[0].Projects[0].Name) + '/' + encodeURI(portfolioData.data.result[0].Projects[0].Pictures[0])}>
            </img>
                <div className='feature-project-content'>
                    <img className='feature-project-content-img' 
                        src={default_URL + '/' + portfolioData.data.Years[0] + '/' + encodeURI(portfolioData.data.result[0].Projects[0].Name) + '/' + encodeURI(portfolioData.data.result[0].Projects[0].Pictures[0])}
                        style={{ transform: `translateX(-${yPos * 0.1}px)` }}></img>
                    <div className='description'>
                        <h2 style={{ transform: `translateX(${yPos * 0.1}px)` }}>{portfolioData.data.result[0].Projects[0].Name}</h2>
                        <p style={{ transform: `translateX(${yPos * 0.2}px)` }}>{portfolioData.data.result[0].Projects[0].Desc}</p>
                        <div className='btn-parent'  style={{ transform: `translateX(${yPos * 0.15}px)` }}>
                            <h3 className='btn-white-outline btn'>
                                <a href={"/portofolio/" + portfolioData.data.Years[0] + '/' + portfolioData.data.result[0].Projects[0].Name}>
                                    MORE DETAIL
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='portfolio-list'>
                    {portfolioData.data.Years.map((year, i) => (
                        <div className='portfolio-section'>
                            <div className='portfolio-title' data-aos='fade-up'>
                                <h2>{year}</h2>
                            </div>
                            <CarouselPortofolio
                                key = {i}
                                data = {portfolioData.data.result[i].Projects}
                                year = {year}
                            ></CarouselPortofolio>
                            {/* <div className='portfolio-gallery'>
                                {portfolioData.data.result[i].Projects.map((project, index) => (
                                    <GalleryTile
                                        image={default_URL + '/' + year + '/' + encodeURI(project.Name) + '/' + encodeURI(project.Pictures[0])}
                                        title={project.Name}
                                        year={year}
                                    ></GalleryTile>
                                ))}
                            </div> */}
                        </div>
                        )
                        )
                    }
                    {/* <div className='portfolio-section'>
                        <div className='portfolio-title' data-aos='fade-up'>
                            <h2>2022</h2>
                        </div>
                        <div className='portfolio-gallery' >
                            <GalleryTile 
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                        </div>
                    </div>
                    <div className='portfolio-section'>
                        <div className='portfolio-title'  data-aos='fade-up'>
                            <h2>2021</h2>
                        </div>
                        <div className='portfolio-gallery'>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                            <GalleryTile
                                image="./project/carousel/2.jpg"
                                title="Title"
                                subtitle="Sub Title"
                            ></GalleryTile>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio