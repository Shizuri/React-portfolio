import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.css'

const AboutMe = props => {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - About me`
	}, [])

	return (
		<article className='About-me'>
			<h2 className='About-me-h2'>About Me</h2>
			<p>Hi. I am a Software Engineer that focuses on Front-end web development. Most of my work is revolves around
			creating responsive websites by using HTML, CSS and JavaScript and web apps by using React.
				The best way to see what I do is to check out my <Link to='/projects' className='About-me-projects-link'>Projects</Link>.</p>
			<h2 className='About-me-h2'>Personality</h2>
			<p>I am a very open, communicative and friendly person and I enjoy just such work
			environments. I love working as part of a team and I value hard work and honesty. My
			greatest asset is that I enjoy learning new things and do so whenever I can. Because of
			my propensity towards attention to detail I have chosen to focus on the Front-end
				development and design aspect of the web developer profession.</p>
			<h2 className='About-me-h2'>Education & Experience</h2>
			<p>I have graduated from the Faculty of Informatics at the European University in Skopje
			as a Software Engineer with a 9.0 GPA. Initially I worked as a hardware specialist and sales manager at PC
			Discount - Skopje. Later I got promoted to store manager. Once I decided to transition to software development I started to
			intensely work on my craft and applying for internship positions. As an intern in the
			company Sourcico I gained knowledge and experience in the JavaEE world. Later I
			received training as a full stack developer in the company Sorsix. Now my goal is solely
				on working as a Front-end developer.</p>
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
