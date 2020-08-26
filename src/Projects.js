import React, { useEffect } from 'react'
import './Projects.css'

function Projects() {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Projects`
	}, [])

	return (
		<div className='Projects'>
			<div className='Projects-container'>

				<h2 className='Projects-h2'>React projects</h2>
				
				<div className='Projects-project-box'>
					<div className='Projects-project-name'>Book Journal</div>
					<div className='Project-container'>
						<div className='Projects-project-site'>
							<img alt='Book Journal site' />
							<div>Web site</div>
						</div>
						<div className='Projects-project-code'>
							<img alt='Book Journal code repository' />
							<div>Code repository</div>
						</div>
					</div>
					<div className='Projects-project-description'>Description</div>
				</div>

				<div className='Projects-project-box'>
					<div className='Projects-project-name'>Book Journal</div>
					<div className='Project-container'>
						<div className='Projects-project-site'>
							<img alt='Book Journal site' />
							<div>Web site</div>
						</div>
						<div className='Projects-project-code'>
							<img alt='Book Journal code repository' />
							<div>Code repository</div>
						</div>
					</div>
					<div className='Projects-project-description'>Description</div>
				</div>

			</div>
		</div>
	)
}

export default Projects