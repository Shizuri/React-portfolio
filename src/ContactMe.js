import React, { useEffect, useState } from 'react'
import './ContactMe.css'
import eposta from './images/e-posta18.png'

function ContactMe() {
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Contect me`
	}, [])

	const [mailShown, setMailShown] = useState(false)

	const handleShowMail = () => {
		setMailShown(true)
	}

	return (
		<div className='Contact-me'>
			<div className='Contact-me-container'>
				<div className='Contact-me-greeting'>Feel free to contact me about any additional information at</div>
				{mailShown !== true ? <div className='Contact-me-spam-protection'></div> : <img src={eposta} alt='' className='Contact-me-eposta'/>}
				<div className='Contact-me-links'>
					<i className='Contact-me-link fas fa-envelope fa-5x' onClick={handleShowMail}></i>
					<i className='Contact-me-link fab fa-linkedin fa-5x'></i>
					<i className='Contact-me-link fab fa-github fa-5x'></i>
				</div>
			</div>
		</div>
	)
}

export default ContactMe