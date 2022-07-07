import React, { useContext, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { yPosContext } from '../context/global-state'


import '../styles/scroll_to_top.css'

function ScrolltoTop() {
    const { yPos, setYPos } = useContext(yPosContext) 
    const [ showButton, setShowButton] = useState(false)

    const scrollTop = (() => {
        window.scrollTo(0,0)
    })
    useEffect(() => {
        yPos == 0 ? setShowButton(false) : setShowButton(true) 
    }, [yPos])
    return (
        <div className={showButton ? "scrolltop show" : "scrolltop hide"} onClick={() => scrollTop()}>
            <FaArrowUp className={showButton ? "icon show" : "icon hide"}></FaArrowUp>
        </div>
    )
}

export default ScrolltoTop