import React, { useState ,useContext } from 'react'
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

    let index = 0

    console.log(year, slug)

    if(typeof portfolioData.data !== "undefined") {
        portfolioData.data.Years.map((data,i) => {data == year ? index = data : index = 0})
        portfolioData.data.result[index].Projects.map((data,index) => {
            console.log(encodeURI(data.Name))
            if(encodeURI(data.Name) == slug) {
                // console.log("TESTS")
                setTitle(data.Name)
                setDesc(data.Desc)
                setImageList([...imageList, data.pictures])
            }
        })
    }
    
    let gallery_tile_l = []
    let gallery_tile_r = []

    // image_list.map(image => {
    //     if(image_list.indexOf(image) % 2 != 0) {gallery_tile_l.push(<img className='gallery-tile' src={image}></img>)}
    //     else if(image_list.indexOf(image) % 2 == 0) {gallery_tile_r.push(<img className='gallery-tile' src={image}></img>)}
    // })
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div className='portfolio-detail-parent'>
            <div className='left'>
                <div className='portfolio-detail-bg'>
                    <img src={imageList[0]}></img>
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