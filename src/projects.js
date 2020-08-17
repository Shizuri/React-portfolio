import React, { useEffect } from 'react'
// import './Projects.css'

function Projects() {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Projects`
	}, [])

	return (
		<div className='aboutMe'>
			Projects Component
		</div>
	)
}

export default Projects