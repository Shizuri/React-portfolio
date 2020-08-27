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
				<h3 className='Projects-h3'>These projects, designed and developed by me, are a showcase of my skill.</h3>
				<Project
					name='Book Journal'
					projectImage={bookJournalImage}
					projectWebSite='https://book-journal-zm.netlify.app/'
					projectCodeRepoLink='https://github.com/Shizuri/React-book-journal'
					projectDescription={<div>
						<em>Technology:</em> This React single page application (SPA) was developed by using <strong>Functional Components, Hooks, the Context API, and React Router</strong>. All data is provided by the public Google Books API. User data is kept in localStorage.
						<br /><br />
						<em>Description:</em> The Book Journal application is a tool for cataloging your books. Once you find your books you can store them in your Journal. There you can note the start and finish date, rate the book, and review your experience.
					</div>}
					codeTaskDescription='Code Repository'
					codeIcon={<i className='Project-code-icon fab fa-github fa-1x'></i>}
				/>

				<Project
					name='Redux Book Journal'
					projectImage={bookJournalImage}
					projectWebSite='https://book-journal-zm.netlify.app/'
					projectCodeRepo='https://github.com/Shizuri/React-book-journal'
					projectDescription='Descrtiption Blah blah blah description'
					codeTaskDescription='code repository'
					codeIcon={<i className='Project-code-icon fab fa-free-code-camp'></i>}
				/>

				<Project
					name='WHAT?!'
					projectImage={bookJournalImage}
					projectWebSite='https://book-journal-zm.netlify.app/'
					projectCodeRepo='https://github.com/Shizuri/React-book-journal'
					projectDescription='Descrtiption Blah blah blah description'
					codeTaskDescription='code repository'
				/>
			</div>
		</div>
	)
}

export default Projects