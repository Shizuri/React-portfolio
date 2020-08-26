import React, { useEffect } from 'react'
import './Projects.css'
import Project from './Project'

import bookJournalImage from './images/project-images/BookJournal.png'

const Projects = props => {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Projects`
	}, [])

	return (
		<div className='Projects'>
			<div className='Projects-container'>
				<h2 className='Projects-h2'>React projects</h2>
				<Project
					name='Book Journal'
					projectImage={bookJournalImage}
					projectWebSite='https://book-journal-zm.netlify.app/'
					projectCodeRepo='https://github.com/Shizuri/React-book-journal'
					description={<div>
						The Book Journal application is a tool for cataloging your books. All of the data is provided by the public Google Books API. Once you find your books you can store them in your Journal. There you can note the start and finish date, rate the book and review your experience.
					<br />
					<br />
					This React single page application was developed by using Functional Components, Hooks, the Context API and React Router.
					<br />
					<br />
					All data is kept in localStorage.
					</div>}
				/>

				<Project
					name='Redux Book Journal'
					projectImage={bookJournalImage}
					projectWebSite='https://book-journal-zm.netlify.app/'
					projectCodeRepo='https://github.com/Shizuri/React-book-journal'
					description='Descrtiption Blah blah blah description'
				/>

				<Project
					name='WHAT?!'
					projectImage={bookJournalImage}
					projectWebSite='https://book-journal-zm.netlify.app/'
					projectCodeRepo='https://github.com/Shizuri/React-book-journal'
					description='Descrtiption Blah blah blah description'
				/>
			</div>
		</div>
	)
}

export default Projects