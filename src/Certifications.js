import React, { useEffect } from 'react'
import './Certifications.css'

import Certificate from './Certificate'
import coltSteeleReactBootcampImage from './images/certifications/ColtSteeleReactBootcamp-Udemy.jpg'
import bobZirollReactBootcampImage from './images/certifications/BobZirollReactBootcamp-Scrimba.png'
import fCCResponsiveWebDesignImage from './images/certifications/FCCResponsiveWebDesign.png'
import fCCJavaScriptAlgorithmsandDataStructuresImage from './images/certifications/FCCJavaScriptAlgorithmsandDataStructures.png'
import sourcicoLetterOfRecommendationImage from './images/certifications/SourcicoLetterOfRecommendation.jpg'

const Certifications = props => {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Certifications`
	}, [])

	return (
		<article className='Certifications'>
			<Certificate
				certificateImage={coltSteeleReactBootcampImage}
				certificateLink='https://www.udemy.com/certificate/UC-3bee9155-5ad1-4df0-9f53-f71e3ae9628e/'
				certificateName='The Modern React Bootcamp by Colt Steele'
				certificateDescription={<>
					An excellent React bootcamp that teaches the core of React, modern technologies like Hooks and the Context API with emphasis on styling.
				</>}
				courseLink='https://www.udemy.com/course/modern-react-bootcamp/'
			/>

			<Certificate
				certificateImage={bobZirollReactBootcampImage}
				certificateLink='https://i.imgur.com/8uyQo2S.png'
				certificateName='The React Bootcamp by Bob Ziroll'
				certificateDescription={<>
					An advanced React bootcamp focusing on new technologies and also Redux.
				</>}
				courseLink='https://scrimba.com/course/greact'
			/>

			<Certificate
				certificateImage={fCCResponsiveWebDesignImage}
				certificateLink='https://www.freecodecamp.org/certification/shizuri/responsive-web-design'
				certificateName='Responsive Web Design by Free Code Camp'
				certificateDescription={<>
					A complete responsive web design course. Starting from basic HTML and finishing with advanced CSS concepts like Flexbox and Grid.
				</>}
				courseLink='https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/'
			/>

			<Certificate
				certificateImage={fCCJavaScriptAlgorithmsandDataStructuresImage}
				certificateLink='https://www.freecodecamp.org/certification/shizuri/javascript-algorithms-and-data-structures'
				certificateName='JavaScript Algorithms and Data Structures by Free Code Camp'
				certificateDescription={<>
					A detailed and extensive JavaScript course.
				</>}
				courseLink='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/'
			/>

			<Certificate
				certificateImage={sourcicoLetterOfRecommendationImage}
				certificateLink='https://i.imgur.com/7QdHvSg.jpg'
				certificateName='Sourcico Internship'
				certificateDescription={<>
					Letter of recommendation from the company Sourcico.
				</>}
			/>
		</article>
	)
}

export default Certifications