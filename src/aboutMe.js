import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import './aboutMe.css'

function AboutMe() {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - About me`
	}, [])

	return (
		<div className='about-me'>
			<div className='about-me-container'>
				<h2>About Me</h2>
				<p>I am a very open, communicative and friendly person and I enjoy just such work
				environments. I love working as part of a team and I value hard work and honesty. My
				greatest asset is that I enjoy learning new things and do so whenever I can. Because of
				my propensity towards attention to detail I have chosen to focus on the front end
				development and design aspect of the web developer profession.</p>
				<h2>Education & Experience</h2>
				<p>I have graduated from the Faculty of Informatics at the European University in Skopje
				as a Software Engineer with a 9.0 GPA. Initially I worked as a hardware specialist at Pc
				Discount - Skopje. Once I decided to transition to software development I started to
				intensely work on my craft and applying for internship positions. As an intern in the
				company Sourcico I gained knowledge and experience in the JavaEE world. Later I
				received training as a full stack developer in the company Sorsix. Now my goal is solely
				on finding a job as a front end developer with a focus on the React JavaScript library.</p>
				{/* <Link to='/projects'>The best way to find out what I do is by checking out my projects.</Link> */}
			</div>
		</div>
	)
}

export default AboutMe
