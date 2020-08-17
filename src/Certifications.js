import React, { useEffect } from 'react'
// import './Certifications.css'

function Certifications() {
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