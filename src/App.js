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
	const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

	const toggleMenu = () => {
		setMobileMenuIsActive(prevMobileMenuIsActive => prevMobileMenuIsActive === true ? false : true)
	}

	const turnOffMenu = () => {
		setMobileMenuIsActive(false)
	}

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
					<NavLink exact to='/projects' activeClassName='App-nav-active' className='App-nav-link-mobile' onClick={turnOffMenu}>Projects</NavLink>
					<NavLink exact to='/about-me' activeClassName='App-nav-active' className='App-nav-link-mobile' onClick={turnOffMenu}>About Me</NavLink>
					<NavLink exact to='/certifications' activeClassName='App-nav-active' className='App-nav-link-mobile' onClick={turnOffMenu}>Certifications</NavLink>
					<NavLink exact to='/contact-me' activeClassName='App-nav-active' className='App-nav-link-mobile' onClick={turnOffMenu}>Contact Me</NavLink>
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
