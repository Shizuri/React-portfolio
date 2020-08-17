import React, { useEffect } from 'react'
// import './Hello.css'

function Hello() {
    useEffect(() => {
        // Update the document title
        document.title = `Zdravko Mavkov`
    }, [])

    return (
        <div className='hello'>
            Hello Component
        </div>
    )
}

export default Hello
