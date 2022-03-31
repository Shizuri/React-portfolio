import React, { useEffect } from 'react'
import './Projects.css'
import Project from './Project'

// Project images
import bookJournalImage from './images/project-images/BookJournal.png'
import reduxBookJournalImage from './images/project-images/ReduxBookJournal.png'
import portfolioLogo from './images/Logo-clean-round.png'
import drRobertLustigTributePageImage from './images/project-images/DrRobertLustigTributePage.png'
import surveyFormImage from './images/project-images/SurveyForm.png'
import productLandingPageImage from './images/project-images/ProductLandingPage.png'
import technicalDocumentationPageImage from './images/project-images/TechnicalDocumentationPage.png'
import fCCPersonalPortfolioImage from './images/project-images/FCCPersonalPortfolio.png'
import mtgBrowserReactV2 from './images/project-images/MtgBrowserReactV2.png'
import mtgBrowserVanillaJS from './images/project-images/MtgBrowserVanillaJS.png'

const Projects = props => {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Projects`
	}, [])

	return (
		<section className='Projects'>
			<h2 className='Projects-h2'>React projects</h2>
			<h3 className='Projects-h3'>Responsive React projects, designed and developed by me</h3>
			{/* React Projects from here */}
			<Project
				name='Book Journal'
				projectImage={bookJournalImage}
				projectWebSite='https://book-journal-zm.netlify.app/'
				projectCodeRepoLink='https://github.com/Shizuri/React-book-journal'
				projectDescription={<>
					<em>Technology:</em> This React single page application (SPA) was developed by using <strong>Functional Components, Hooks, the Context API and React Router</strong>. All data is provided by the public Google Books API. User data is kept in localStorage.
					<br /><br />
					<em>Description:</em> The Book Journal application is a tool for cataloging your books. Once you find your books you can store them in your Journal. There you can note the start and finish date, rate the book and review your experience.
				</>}
				codeTaskDescription='Code Repository'
				codeIcon={<i className='Project-code-icon fab fa-github fa-1x'/>}
			/>

			<Project
				name='Redux Book Journal'
				projectImage={reduxBookJournalImage}
				projectWebSite='https://book-journal-redux-zm.netlify.app/book-browser'
				projectCodeRepoLink='https://github.com/Shizuri/React-redux-book-journal'
				projectDescription={<>
					<em>Technology:</em> Unlike the previous project, this one uses older React technology to achieve the same result. <strong>Class Components, Redux and React Router</strong> were used to completely rewrite all of the application logic. All data is provided by the public Google Books API. User data is kept in localStorage.
					<br /><br />
					<em>Description:</em> The Book Journal application is a tool for cataloging your books. Once you find your books you can store them in your Journal. There you can note the start and finish date, rate the book, and review your experience.
				</>}
				codeTaskDescription='Code Repository'
				codeIcon={<i className='Project-code-icon fab fa-github fa-1x'/>}
			/>

			<Project
				name='Personal Portfolio'
				projectImage={portfolioLogo}
				projectWebSite='https://zdravkomavkov.netlify.app/'
				projectCodeRepoLink='https://github.com/Shizuri/React-portfolio'
				projectDescription={<>
					<em>Technology:</em> I developed my personal portfolio page as a React project with client side routing (SPA). Modern React technologies <strong>Functional Components, Hooks, React Router and React Transition Group</strong> were used in its development.
					<br /><br />
					<em>Description:</em> This is my personal portfolio page, the very site that you are looking at. I put a lot of time and effort into its design and every pixel was created, placed and styled by me. I create all of my sites to be responsive so make sure to also check out the site on your phone.
				</>}
				codeTaskDescription='Code Repository'
				codeIcon={<i className='Project-code-icon fab fa-github fa-1x'/>}
			/>

			<Project
				name='MtG Browser'
				projectImage={mtgBrowserReactV2}
				projectWebSite='https://mtg-browser-v2.netlify.app/'
				projectCodeRepoLink='https://github.com/Shizuri/entry_frontend_react_polar_v2'
				projectDescription={<>
					<em>Technology:</em> I developed the Magic the Gathering card browser website as a React project with client side routing (SPA). Modern React technologies <strong>Functional Components, Hooks, Context API and React multi select component</strong> were used in its development.
					<br /><br />
					<em>Description:</em> This web application welcomes a user that can browse, sort and filter 100 random Magic the Gathering cards provided from an external API.
				</>}
				codeTaskDescription='Code Repository'
				codeIcon={<i className='Project-code-icon fab fa-github fa-1x'/>}
			/>

			<h2 className='Projects-h2'>Vanilla JavaScript projects</h2>
			<h3 className='Projects-h3'>Responsive website created in just JavaScript, no frameworks</h3>
			{/* Vanilla JavaScript from here */}
			
			<Project
				name='Vanilla JS MtG Browser'
				projectImage={mtgBrowserVanillaJS}
				projectWebSite='https://mtg-browser-vanilla-js.netlify.app/'
				projectCodeRepoLink='https://github.com/Shizuri/PolarCape_Entry_Frontend'
				projectDescription={<>
					<em>Technology:</em> This version the Magic the Gathering card browser website was developed by only using <strong>JavaScript</strong>. No frameworks were used in its creation.
					<br /><br />
					<em>Description:</em> This website welcomes a user that can browse, sort and filter 100 random Magic the Gathering cards provided from an external API.
				</>}
				codeTaskDescription='Code Repository'
				codeIcon={<i className='Project-code-icon fab fa-github fa-1x'/>}
			/>

			<h2 className='Projects-h2'>Free Code Camp projects</h2>
			<h3 className='Projects-h3'>Responsive websites created for the FCC certification</h3>
			{/* Free Code Camp Projects from here */}
			<Project
				name='Tribute Page'
				projectImage={drRobertLustigTributePageImage}
				projectWebSite='https://codepen.io/shizuri/full/rNNXqzL'
				projectCodeRepoLink='https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page'
				projectDescription={<>
					<em>Technology:</em> Pure <strong>HTML and CSS</strong> was used in the creation of this project.
					<br /><br />
					<em>Description:</em> This FCC project requires the creation of a <strong>Tribute page</strong> by following the outlined user stories. You can find more details about the requirements and the task on the link below.
				</>}
				codeTaskDescription='Free Code Camp task'
				codeIcon={<i className='Project-code-icon fab fa-free-code-camp'/>}
			/>

			<Project
				name='Survey Form'
				projectImage={surveyFormImage}
				projectWebSite='https://codepen.io/shizuri/full/VwYaeWr'
				projectCodeRepoLink='https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form'
				projectDescription={<>
					<em>Technology:</em> Pure <strong>HTML and CSS</strong> was used in the creation of this project.
					<br /><br />
					<em>Description:</em> This FCC project requires the creation of a <strong>Survey Form</strong> by following the outlined user stories. You can find more details about the requirements and the task on the link below.
				</>}
				codeTaskDescription='Free Code Camp task'
				codeIcon={<i className='Project-code-icon fab fa-free-code-camp'/>}
			/>

			<Project
				name='Product Landing Page'
				projectImage={productLandingPageImage}
				projectWebSite='https://codepen.io/shizuri/full/GRgLrjX'
				projectCodeRepoLink='https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page'
				projectDescription={<>
					<em>Technology:</em> Pure <strong>HTML and CSS</strong> was used in the creation of this project.
					<br /><br />
					<em>Description:</em> This FCC project requires the creation of a <strong>Product Landing Page</strong> by following the outlined user stories. You can find more details about the requirements and the task on the link below.
				</>}
				codeTaskDescription='Free Code Camp task'
				codeIcon={<i className='Project-code-icon fab fa-free-code-camp'/>}
			/>

			<Project
				name='Technical Documentation'
				projectImage={technicalDocumentationPageImage}
				projectWebSite='https://codepen.io/shizuri/full/VweeONv'
				projectCodeRepoLink='https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page'
				projectDescription={<>
					<em>Technology:</em> Pure <strong>HTML, CSS and JavaScript</strong> was used in the creation of this project.
					<br /><br />
					<em>Description:</em> This FCC project requires the creation of a <strong>Technical Documentation Page</strong> by following the outlined user stories. You can find more details about the requirements and the task on the link below.
				</>}
				codeTaskDescription='Free Code Camp task'
				codeIcon={<i className='Project-code-icon fab fa-free-code-camp'/>}
			/>

			<Project
				name='FCC Personal Portfolio'
				projectImage={fCCPersonalPortfolioImage}
				projectWebSite='https://codepen.io/shizuri/full/yLeaLgK'
				projectCodeRepoLink='https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage'
				projectDescription={<>
					<em>Technology:</em> Pure <strong>HTML and CSS</strong> was used in the creation of this project.
					<br /><br />
					<em>Description:</em> This FCC project requires the creation of a <strong>Personal Portfolio</strong> by following the outlined user stories. You can find more details about the requirements and the task on the link below.
				</>}
				codeTaskDescription='Free Code Camp task'
				codeIcon={<i className='Project-code-icon fab fa-free-code-camp'/>}
			/>
		</section>
	)
}

export default Projects