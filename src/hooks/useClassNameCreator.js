import { useContext } from 'react'
import { Context } from '../context'

// Return the class name with our without 'lite' attached to the class
const ClassNameCreator = name => {
    const { theme } = useContext(Context)
    return theme === 'light' ? name += ' light' : name
}

export default ClassNameCreator