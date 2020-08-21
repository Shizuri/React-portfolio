import React, { useEffect } from 'react'
import zmImage from './images/ZM-Portfolio.jpg'
import './Hello.css'

function Hello() {
    useEffect(() => {
        // Update the document title
        document.title = `Zdravko Mavkov`
    }, [])

    return (
        <div className='Hello'>
            <div className='Hello-container'>
                <div className='filler'></div>
                <div className='filler'></div>
                <div className='filler'></div>
                <div className='filler'></div>
                <div className='filler'></div>
                <img className='Hello-image' src={zmImage} alt='tew'/>
                <div className='Hello-words'>
                    <div>Hi, I am</div>
                    <div>Zdravko Mavkov</div>
                    <div>FRONT-END DEV</div>
                </div>
            </div>
        </div>
    )
}

export default Hello
