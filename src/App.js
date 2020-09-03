import React, { useState } from 'react'
import './App.css'
import { Link, NavLink, Route, Switch } from 'react-router-dom'

import AboutMe from './AboutMe'
import Projects from './Projects'
import Hello from './Hello'
import Certifications from './Certifications'
import ContactMe from './ContactMe'

import logo from './images/Logo-round2.png'

const App = props => {
	// Holds the menu open/closed state
	const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

	// Simple function to toggle the menu state
	const toggleMenu = () => {
		setMobileMenuIsActive(prevMobileMenuIsActive => prevMobileMenuIsActive === true ? false : true)
	}

	// Used just for the Logo since it's part of the navigation
	const turnOffMenu = () => {
		setMobileMenuIsActive(false)
	}

	// Function that appends the class that turns on the mobile navigation
	// This method was chosen so that the "come out of the darkness" effect can be achieved
	const classNameCreator = name => {
		return mobileMenuIsActive === true ? name += ' App-mobile-menu-on' : name
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<Link to='/' className='App-logo-link'><img className='App-logo' src={logo} alt='logo' onClick={turnOffMenu}/></Link>
				<nav className='App-nav'>
					<NavLink exact to='/projects' activeClassName='App-nav-active' className='App-nav-link'>Projects</NavLink>
					<NavLink exact to='/about-me' activeClassName='App-nav-active' className='App-nav-link'>About Me</NavLink>
					<NavLink exact to='/certifications' activeClassName='App-nav-active' className='App-nav-link'>Certifications</NavLink>
					<NavLink exact to='/contact-me' activeClassName='App-nav-active' className='App-nav-link'>Contact Me</NavLink>
				</nav>
				<nav className={classNameCreator('App-mobile-nav')}>
					<NavLink exact to='/projects' activeClassName='App-nav-active' className='App-mobile-nav-link' onClick={turnOffMenu}>Projects</NavLink>
					<NavLink exact to='/about-me' activeClassName='App-nav-active' className='App-mobile-nav-link' onClick={turnOffMenu}>About Me</NavLink>
					<NavLink exact to='/certifications' activeClassName='App-nav-active' className='App-mobile-nav-link' onClick={turnOffMenu}>Certifications</NavLink>
					<NavLink exact to='/contact-me' activeClassName='App-nav-active' className='App-mobile-nav-link' onClick={turnOffMenu}>Contact Me</NavLink>
				</nav>
				<div className='App-menu-button' onClick={toggleMenu}>&#9776;</div>
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
