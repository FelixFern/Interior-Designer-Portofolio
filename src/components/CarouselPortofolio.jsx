import React, { useState } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import '../styles/carouselportofolio.css'

function GalleryTile(props) {
    return (
        <div className='gallery-tile-parent'  data-aos='fade-up'>
            <img className='tile-image' src={props.image}></img>
            <div className='tile-detail'>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <div className='btn-parent'>
                    <h3 className='btn-white-outline btn'>
                        <a href={"/portofolio/" + props.year + '/' + props.title}>
                            MORE DETAIL
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    )
}

function CarouselPortofolio({data, year}) {
    const [ xOffset, setXOffset ] = useState(0)
    const default_URL = './project/portfolios'
    console.log(data)

    let slides = []

    const moveLeft = () => {
        xOffset == 0 ? setXOffset(0) : setXOffset(xOffset + 100 / slides.length)
    }
    const moveRight = () => {
        xOffset <= -(slides.length - 2) * 100 / slides.length ? setXOffset(0) : setXOffset(xOffset - 100 / slides.length)
    }

    data.map((val, i) => {
        slides.push(
            <GalleryTile
                title={val.Name}
                subtitle=""
                year={year}
                image={default_URL + '/' + year + '/' + encodeURI(val.Name) + '/' + encodeURI(val.Pictures[0])}
            ></GalleryTile>
        )
    })
    return (
        <div className='carousel-parent'>
            <div className='carousel-p' style={{ transform: `translateX(${xOffset}%)`}}>
                {slides}
            </div>
            <div className="thumb">
                <h1 onClick={() => {moveLeft()}}><AiOutlineLeft/></h1>
                <h1 onClick={() => {moveRight()}}><AiOutlineRight/></h1>
            </div>
        </div>
    )
}

export default CarouselPortofolio