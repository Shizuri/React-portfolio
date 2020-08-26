import React, { useEffect } from 'react'
// import './Certifications.css'

const Certifications = props => {
	useEffect(() => {
        // Update the document title
        document.title = `Zdravko Mavkov - Certifications`
    }, [])

	return (
		<div className='certifications'>
			Certifications Component
		</div>
	)
}

export default Certifications