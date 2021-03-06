import React from 'react'
import './Certificate.css'

const Certificate = props => {
    const { certificateName, certificateImage, certificateLink, certificateDescription, courseLink } = props

    return (
        <article className='Certificate'>
            <figure className='Certificate-left-box'>
                <a className='Certificate-link' href={certificateLink} target='_blank' rel='noopener noreferrer'>
                    <img className='Certificate-image' src={certificateImage} alt={certificateName} />
                </a>
            </figure>
            <section className='Certificate-right-box'>
                <a className='Certificate-link' href={certificateLink} target='_blank' rel='noopener noreferrer'>
                    <div className='Certificate-name'>{certificateName}</div>
                </a>
                <div className='Certificate-description'>{certificateDescription}</div>
                {courseLink !== undefined && <a className='Certificate-site-link' href={courseLink} target='_blank' rel='noopener noreferrer'>Course link</a>}
            </section>
        </article>
    )
}

export default Certificate