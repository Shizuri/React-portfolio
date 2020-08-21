import React from 'react'
// import { useContext } from 'react'
import './App.css'
// import { Context } from './context'
import { Link, NavLink, Route, Switch } from 'react-router-dom'

import AboutMe from './AboutMe'
import Projects from './Projects'
import Hello from './Hello'
import Certifications from './Certifications'
import ContactMe from './ContactMe'

import logo from './images/Logo-round2.png'
// import useClassNameCreator from './hooks/useClassNameCreator'

const App = props => {
	// const { setTheme } = useContext(Context)

	// Change the value of the theme in the Context
	// const changeTheme = () => {
	// 	setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
	// }

	// Return the class name with our without 'light' attached to the class
	// const classNameCreator = useClassNameCreator

	return (
		<div className='App'>
			<header className='App-header'>
				<Link to='/' className='App-logo-link'><img className='App-logo' src={logo} alt='logo'/></Link>
				{/* <p>Theme: {theme}</p> */}
				<nav className='App-nav'>
					<NavLink exact to='/about-me' activeClassName='App-nav-active' className='App-nav-link'>About Me</NavLink>
					<NavLink exact to='/projects' activeClassName='App-nav-active' className='App-nav-link'>Projects</NavLink>
					<NavLink exact to='/certifications' activeClassName='App-nav-active' className='App-nav-link'>Certifications</NavLink>
					<NavLink exact to='/contact-me' activeClassName='App-nav-active' className='App-nav-link'>Contact Me</NavLink>
				</nav>
				{/* <button onClick={changeTheme}>Change theme</button> */}
			</header>

			<Switch>
				<Route exact path='/'>
					<Hello />
				</Route>
				<Route exact path='/about-me'>
					<AboutMe />
				</Route>
				<Route exact path='/projects'>
					<Projects />
				</Route>
				<Route exact path='/certifications'>
					<Certifications />
				</Route>
				<Route exact path='/contact-me'>
					<ContactMe />
				</Route>
			</Switch>
		</div>
	)
}

export default App
