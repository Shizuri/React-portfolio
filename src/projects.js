import React, { useEffect } from 'react'
// import './Projects.css'

function Projects() {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Projects`
	}, [])

	return (
		<div className='projects'>
			<div className='projects-container'>
				<h2>React projects</h2>
				<div className='projects-project-box'>
					<div className='projects-project-name'>Book Journal</div>
					<div className='projects-project-site'>
						<img alt='Book Journal site'/>
						<div>Web site</div>
					</div>
					<div className='projects-project-code'>
						<img alt='Book Journal code repository'/>
						<div>Code repository</div>
					</div>
					<p className='projects-project-description'>Description</p>
				</div>

				<div className='projects-project-box'>
					<div className='projects-project-name'>Book Journal</div>
					<div className='projects-project-site'>
						<img alt='Book Journal site'/>
						<div>Web site</div>
					</div>
					<div className='projects-project-code'>
						<img alt='Book Journal code repository'/>
						<div>Code repository</div>
					</div>
					<p className='projects-project-description'>Description</p>
				</div>
			</div>
		</div>
	)
}

export default Projects