import React, { useState } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import './carousel.css'

function Carousel(props) {
    const [xOffset, setXOffset] = useState(0)
    const imageList = props.images
    
    let slides = []
    
    imageList.map(image => {
        slides.push(
            <img className="carousel-slide" src={image}></img>
        )
    })

    const moveLeft = () => {
        xOffset == 0 ? setXOffset(0) : setXOffset(xOffset + 25)
        console.log(xOffset)
    }
    const moveRight = () => {
        xOffset <= -(slides.length - 2) * 25 ? setXOffset(0) : setXOffset(xOffset - 25)
        console.log(xOffset)
    }
    // Temporary
    return (
        <>
            <div className='carousel-container'>
                <div className='carousel' style={{ transform: `translateX(${xOffset}%)`}}>
                    {slides}
                </div>
            </div>
            <div className="thumb">
                <h1 onClick={() => {moveLeft()}}><AiOutlineLeft/></h1>
                <h1 onClick={() => {moveRight()}}><AiOutlineRight/></h1>
            </div>
        </>
    )
}

export default Carousel