import React, { useEffect, useState, useContext } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { carouselContext } from '../context/global-state'
import '../styles/carousel.css'

function Carousel() {
    const [ xOffset, setXOffset ] = useState(0)
    const { carouselData, setCarouselData }  = useContext(carouselContext)
    const [ imageList, setImageList ] = useState([])
    const [ links, setLinks ] = useState([])
    
    let slides = []
    const default_URL = './project/carousel/images/'
    
    useEffect(() => {
        if(typeof carouselData.data !== 'undefined') {
            setImageList(carouselData.data.result)
            setLinks(carouselData.data.links)
        }
    }, [carouselData])

    imageList.map((image,i) => {
        slides.push(
            <a href={links[i]}>
                <img key={imageList.indexOf(image)} className="carousel-slide" src={default_URL + image}></img>
            </a>
        )
    })

    const moveLeft = () => {
        xOffset == 0 ? setXOffset(0) : setXOffset(xOffset + 100 / slides.length)
    }
    const moveRight = () => {
        xOffset <= -(slides.length - 2) * 100 / slides.length ? setXOffset(0) : setXOffset(xOffset - 100 / slides.length)
    }

    return (
        <>
            <div className='carousel' style={{ transform: `translateX(${xOffset}%)`}}>
                {slides}
            </div>
            <div className="thumb">
                <h1 onClick={() => {moveLeft()}}><AiOutlineLeft/></h1>
                <h1 onClick={() => {moveRight()}}><AiOutlineRight/></h1>
            </div>
        </>
    )
}

export default Carousel