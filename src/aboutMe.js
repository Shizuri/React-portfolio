import React, { useEffect } from 'react'
// import './aboutMe.css'

function AboutMe() {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - About me`
	}, [])

	return (
		<div className='aboutMe'>
			About Me Component
		</div>
	)
}

export default AboutMe
