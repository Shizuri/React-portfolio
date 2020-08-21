// 
import React, { useState } from 'react'
const Context = React.createContext()

const ContextProvider = props => {
    const [menuIsActive, setMenuIsActive] = useState('none') // The state of the menu
    const [theme, setTheme] = useState('dark') // The site's theme state

    return (
        <Context.Provider value={{
            menuIsActive,
            setMenuIsActive,
            theme: theme,
            setTheme: setTheme,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }