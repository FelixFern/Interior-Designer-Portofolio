import React, { useEffect, useState, useContext } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { carouselContext } from '../context/global-state'
import '../styles/carousel.css'

function Carousel(props) {
    const [ xOffset, setXOffset ] = useState(0)
    const { carouselData, setCarouselData }  = useContext(carouselContext)
    const [ imageList, setImageList ] = useState([])
    
    let slides = []
    const default_URL = './project/carousel/'
    
    useEffect(() => {
        if(typeof carouselData.data !== 'undefined') {
            setImageList(carouselData.data.result)
        }
    }, [carouselData])

    imageList.map(image => {
        slides.push(
            <img key={imageList.indexOf(image)} className="carousel-slide" src={default_URL + image}></img>
        )
    })

    const moveLeft = () => {
        xOffset == 0 ? setXOffset(0) : setXOffset(xOffset + 25)
    }
    const moveRight = () => {
        xOffset <= -(slides.length - 2) * 25 ? setXOffset(0) : setXOffset(xOffset - 25)
    }
    // Temporary
    return (
        <>
            {/* <div className='carousel-container'> */}
                <div className='carousel' style={{ transform: `translateX(${xOffset}%)`}}>
                    {slides}
                </div>
            {/* </div> */}
            <div className="thumb">
                <h1 onClick={() => {moveLeft()}}><AiOutlineLeft/></h1>
                <h1 onClick={() => {moveRight()}}><AiOutlineRight/></h1>
            </div>
        </>
    )
}

export default Carousel