import React, { useEffect, useState } from 'react'
import './ContactMe.css'
import epostaImage from './images/e-posta18.png'

const ContactMe = props => {
	const [mailShown, setMailShown] = useState(false)
	
	const handleShowMail = () => {
		setMailShown(true)
	}
	
	useEffect(() => {
		// Update the document title
		document.title = `Zdravko Mavkov - Contact me`
	}, [])
	
	return (
		<div className='Contact-me page'>
			<div className='Contact-me-greeting'>Feel free to contact me about any additional information at:</div>
			{mailShown !== true ? <div className='Contact-me-spam-protection-blank'></div> : <img src={epostaImage} alt='' className='Contact-me-eposta-image' />}
			<div className='Contact-me-spam-protection-notification'>The email is an image to prevent spam.<br />Apologies for the inconvenience.</div>
			<div className='Contact-me-links'>
				<i className='Contact-me-link fas fa-envelope fa-5x' onClick={handleShowMail}></i>
				<a href='https://www.linkedin.com/in/zdravko-mavkov/' target='_blank' rel='noopener noreferrer'><i className='Contact-me-link fab fa-linkedin fa-5x'></i></a>
				<a href='https://github.com/Shizuri' target='_blank' rel='noopener noreferrer'><i className='Contact-me-link fab fa-github fa-5x'></i></a>
			</div>
		</div>
	)
}

export default ContactMe