import React from 'react'
import '../styles/loading.css'

function Loading() {
    return (
        <div className='loading-parent'>
            <div className='loading-content'>
                <img src='./loading.svg'></img>
            </div>
        </div>
    )
}

export default Loading