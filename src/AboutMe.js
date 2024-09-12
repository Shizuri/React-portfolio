import React, { useEffect } from 'react'
import './AboutMe.css'

const AboutMe = props => {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - About me`
	}, [])

	return (
		<article className='About-me'>
			<h2 className='About-me-h2'>Skills</h2>
			<p>Hi. I am a Software Engineer that focuses on Front-end web development.
				<br />
				 Most of my work revolves around
			creating responsive websites by using
			<a className='About-me-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noopener noreferrer'> HTML</a>
			, <a className='About-me-link' href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noopener noreferrer'> CSS </a>
			 and <a className='About-me-link' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer'> JavaScript </a>
			 and web apps by using <a className='About-me-link' href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'> React</a>.
			I prefer to use modern React technologies like
			<a className='About-me-link' href='https://reactjs.org/docs/components-and-props.html' target='_blank' rel='noopener noreferrer'> Functional Components</a>,
			<a className='About-me-link' href='https://reactjs.org/docs/hooks-intro.html' target='_blank' rel='noopener noreferrer'> Hooks </a>
			and the <a className='About-me-link' href='https://reactjs.org/docs/context.html' target='_blank' rel='noopener noreferrer'> Context API </a>
			but I am also proficient in the classic React ways of doing things by using
			<a className='About-me-link' href='https://reactjs.org/docs/components-and-props.html' target='_blank' rel='noopener noreferrer'> Class Components </a>
			and <a className='About-me-link' href='https://redux.js.org/' target='_blank' rel='noopener noreferrer'> Redux </a>.
			I find <a className='About-me-link' href='https://git-scm.com/' target='_blank' rel='noopener noreferrer'> Git </a>
			and <a className='About-me-link' href='https://github.com/Shizuri' target='_blank' rel='noopener noreferrer'> GitHub </a>
			to be essential tools in my everyday work.
			<br />
			I have also used many other programming languages, frameworks and IT technologies but those listed here are just the ones
			that directly influence my everyday work as a Front-end developer.</p>

			<h2 className='About-me-h2'>Personality</h2>
			<p>I am a very open, communicative and friendly person and I enjoy just such work
			environments. I love working as part of a team and I value hard work and honesty. My
			greatest asset is that I enjoy learning new things and do so whenever I can. Because of
			my propensity towards attention to detail I have chosen to focus on the Front-end
				development and design aspect of the web developer profession.</p>

			<h2 className='About-me-h2'>Education & Experience</h2>
			<p>I have graduated from the Faculty of Informatics at the European University in Skopje
				as a Software Engineer with a 9.0 GPA. Initially I worked as a hardware specialist and sales manager at PC
				Discount - Skopje. Later I got promoted to store manager. Once I decided to transition to software development I
				started to
				intensely work on my craft and applying for internship positions. As an intern in the
				company <a className='About-me-link' href='https://sourcico.com/' target='_blank' rel='noopener noreferrer'>Sourcico </a>
					I gained knowledge and experience in the JavaEE world. Later I
					received training as a full stack developer in the company <a className='About-me-link' href='https://www.sorsix.com/' target='_blank' rel='noopener noreferrer'>Sorsix</a>.
					Since November 2020 I have worked
					professionally
					as a Front-end developer at
					<a className='About-me-link' href='https://metergram.com/' target='_blank' rel='noopener noreferrer'> Metergram</a>.
			</p>
			{/* <h2 className='About-me-h2'>Additional Knowledge</h2>
				<p>From my first encounter with computers I have been fascinated by them. I’ve come in
				contact with, studied and worked with many programming languages, computer
				programs and development systems. Here is a list of some of them:<br />
				C++, Java, C#, Visual Basic, Pascal, TypeScript, Angular, Git, Bootstrap 4, Heroku,
				Spring Boot, JavaServer Faces, Maven, Gradle, JUnit, Servlets, JSP, JSTL, JDBC,
				MySQL, Postgresql, JAX-RS, RESTful APIs, Jersey, Intellij IDEA, Eclipse IDE, NetBeans
				IDE, VisualStudio Code and more.</p> */}
		</article>
	)
}

export default AboutMe
