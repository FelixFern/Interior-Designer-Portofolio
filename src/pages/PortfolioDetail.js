import React, { useState ,useContext, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { yPosContext, portfolioContext } from '../context/global-state';
import '../styles/portfolio_detail.css'


function PortfolioDetail() {
    let { year, slug } = useParams()

    const { yPos, setYPos } = useContext(yPosContext)
    const { portfolioData, setPortfolioData } = useContext(portfolioContext)

    const [ title, setTitle ] = useState("")
    const [ subtitle, setSubtitle ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ imageList, setImageList ] = useState([])

    const handleScroll = () => setYPos(window.pageYOffset);

    const default_URL = 'http://localhost:3000/project/portfolios'

    useEffect(() => {
        if(typeof portfolioData.data !== "undefined") {
            portfolioData.data.result[portfolioData.data.Years.indexOf(year)].Projects.map((data,j) => {
                if(data.Name == slug) {
                    setTitle(data.Name)
                    setDesc(data.Desc)
                    setImageList(data.Pictures)
                }
            })
        }
    }, [portfolioData])
    
    
    let gallery_tile_l = []
    let gallery_tile_r = []
    imageList.map(image => {
        if(imageList.indexOf(image) % 2 != 0) {gallery_tile_l.push(<img className='gallery-tile' src={default_URL + '/' + year + '/' + slug + '/' + image}></img>)}
        else if(imageList.indexOf(image) % 2 == 0) {gallery_tile_r.push(<img className='gallery-tile' src={default_URL + '/' + year + '/' + slug + '/' + image}></img>)}
    })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='portfolio-detail-parent'>
            <div className='left'>
                <div className='portfolio-detail-bg'>
                    <img src={default_URL + '/' + year + '/' + slug + '/' + imageList[0]}></img>
                </div>
                <div className='portfolio-desc-parent'>
                    <h2 className='subtitle'>{subtitle}</h2>
                    <div className='portfolio-desc'>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='gallery gallery-l'>
                    {gallery_tile_l}
                </div>
                <div className='gallery gallery-r'>
                    {gallery_tile_r}
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail