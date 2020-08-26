import React, { useEffect } from 'react'
import zmImage from './images/ZM-Portfolio.jpg'
import './Hello.css'

const Hello = props => {
    useEffect(() => {
        // Update the document title
        document.title = `Zdravko Mavkov`
    }, [])

    return (
        <div className='Hello'>
            <div className='Hello-container'>
                <img className='Hello-image' src={zmImage} alt=''/>
                <div className='Hello-text'>
                    <div className='Hello-text-hi'>Hi, I am</div>
                    <div className='Hello-text-name'>Zdravko Mavkov</div>
                    <div className='Hello-text-profession'>FRONT-END DEV</div>
                </div>
            </div>
        </div>
    )
}

export default Hello
