import React, { useContext } from 'react'
import './App.css'
import './base.css'
import { Context } from './context'
import { NavLink, Route, Switch } from 'react-router-dom'

import AboutMe from './AboutMe'
import Projects from './Projects'
import Hello from './Hello'
import Certifications from './Certifications'
import ContactMe from './ContactMe'

import useClassNameCreator from './hooks/useClassNameCreator'

const App = props => {
	const { setTheme } = useContext(Context)

	// Change the value of the theme in the Context
	const changeTheme = () => {
		setTheme(prevTheme => prevTheme === 'lite' ? 'dark' : 'lite')
	}

	// Return the class name with our without 'lite' attached to the class
	const classNameCreator = useClassNameCreator

	return (
		<div className={classNameCreator('App')}>
			<header className={classNameCreator('App-header')}>
				<NavLink exact to='/' activeClassName={classNameCreator('App-nav-active')} className={classNameCreator('App-nav-link')}>App</NavLink>
				{/* <p>Theme: {theme}</p> */}
				<nav className={classNameCreator('App-nav')}>
					<NavLink exact to='/about-me' activeClassName={classNameCreator('App-nav-active')} className={classNameCreator('App-nav-link')} style={{padding: '10px'}}>About Me</NavLink>
					<NavLink exact to='/projects' activeClassName={classNameCreator('App-nav-active')} className={classNameCreator('App-nav-link')} style={{padding: '10px'}}>Projects</NavLink>
					<NavLink exact to='/certifications' activeClassName={classNameCreator('App-nav-active')} className={classNameCreator('App-nav-link')} style={{padding: '10px'}}>Certifications</NavLink>
					<NavLink exact to='/contact-me' activeClassName={classNameCreator('App-nav-active')} className={classNameCreator('App-nav-link')} style={{padding: '10px'}}>Contact Me</NavLink>
				</nav>
				<button onClick={changeTheme}>Change theme</button>
			</header>
			<hr/>

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
