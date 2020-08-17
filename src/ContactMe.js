import React, { useEffect } from 'react'
// import './ContactMe.css'

function ContactMe() {
	useEffect(() => {
        // Update the document title
        document.title = `Zdravko Mavkov - Contect me`
    }, [])

	return (
		<div className='certifications'>
			Contact Me Component
		</div>
	)
}

export default ContactMe