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
				<div className='Contact-me-greeting'>Feel free to contact me about any additional information at:</div>
				{mailShown !== true ? <div className='Contact-me-spam-protection'></div> : <img src={eposta} alt='' className='Contact-me-eposta-image' />}
				<div className='Contact-me-spam-protection-notifiaction'>The email is an image to prevent spam.<br />Apologies for the inconvenience.</div>
				<div className='Contact-me-links'>
					<i className='Contact-me-link fas fa-envelope fa-5x' onClick={handleShowMail}></i>
					<a href='https://www.linkedin.com/in/zdravko-mavkov-a9b9b7179/' target='_blank'><i className='Contact-me-link fab fa-linkedin fa-5x'></i></a>
					<a href='https://github.com/Shizuri' target='_blank'><i className='Contact-me-link fab fa-github fa-5x'></i></a>

				</div>
			</div>
		</div>
	)
}

export default ContactMe