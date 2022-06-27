import React, { useEffect ,useContext, useState } from 'react'
import { yPosContext } from '../context/global-state';
import './portfolio_detail.css'


function PortfolioDetail({title, subtitle, desc, image_list}) {
    const { yPos, setYPos } = useContext(yPosContext)
    const handleScroll = () => setYPos(window.pageYOffset);

    let gallery_tile_l = []
    let gallery_tile_r = []

    image_list.map(image => {
        if(image_list.indexOf(image) % 2 != 0) {gallery_tile_l.push(<img className='gallery-tile' src={image}></img>)}
        else if(image_list.indexOf(image) % 2 == 0) {gallery_tile_r.push(<img className='gallery-tile' src={image}></img>)}
    })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='portfolio-detail-parent'>
            <div className='left'>
                <div className='portfolio-detail-bg'>
                    <img src={image_list[0]}></img>
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