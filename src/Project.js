import React from 'react'
import './Project.css'

const Project = props => {
    const { name, projectImage, projectWebSite, projectCodeRepoLink, projectDescription, codeTaskDescription, codeIcon } = props
    // console.log('props: ', props)

    return (
        <div className='Project'>
            <a className='Project-site-link' href={projectWebSite} target='_blank' rel='noopener noreferrer'>
                <div className='Project-left-box'>
                    <img className='Project-site-image' src={projectImage} alt={`${name} site`} />
                    <div className='Project-name'>{name}</div>
                </div>
            </a>
            <div className='Project-right-box'>
                <div className='Project-description'>{projectDescription}</div>
                <div className='Project-code-box'>
                    <a className='Project-code-link' href={projectCodeRepoLink} target='_blank' rel='noopener noreferrer'>
                        {codeIcon}
                        <span>{codeTaskDescription}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project