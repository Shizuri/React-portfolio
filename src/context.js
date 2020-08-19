// 
import React, { useState } from 'react'
const Context = React.createContext()

const ContextProvider = props => {
    const [theme, setTheme] = useState('dark') // The site's theme state

    return (
        <Context.Provider value={{
            theme: theme,
            setTheme: setTheme,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }