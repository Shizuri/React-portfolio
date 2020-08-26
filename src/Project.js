import React from 'react'
import './Project.css'

const Project = props => {
    console.log('props: ', props)

    const { name, projectImage, codeImage, projectWebSite, projectCodeRepo, description } = props

    console.log('name: ', name)
    console.log('projectImage: ', projectImage)

    return (
        <div className='Project'>
            <div className='Project-left-box'>
                <a href={projectWebSite} target='_blank' rel='noopener noreferrer'><img className='Project-site-image' src={projectImage} alt={`${name} site`} /></a>
                <div className='Project-name'>{name}</div>
            </div>
            <div className='Project-right-box'>
                <div className='Project-description'>{description}</div>
                <a href={projectCodeRepo} target='_blank' rel='noopener noreferrer'><i className='Project-code-link fab fa-github fa-5x'></i></a>
            </div>
        </div>
    )
}

export default Project