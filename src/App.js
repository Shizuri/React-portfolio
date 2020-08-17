import React, { useContext } from 'react'
import './App.css'
import { Context } from './context'
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Hello from './Hello'
import Certifications from './Certifications'
import ContactMe from './ContactMe'

function App() {
	const { theme, setTheme } = useContext(Context)

	const changeTheme = () => {
		setTheme(prevTheme => prevTheme === 'lite' ? 'dark' : 'lite')
	}

	return (
		<div className='App'>
			<Link to='/'>App</Link>
			<p>Theme: {theme}</p>

			<nav className='App-nav'>
				<NavLink exact to='/about-me' activeClassName='App-nav-active' className='App-nav-link' style={{padding: '10px'}}>About Me</NavLink>
				<NavLink exact to='/projects' activeClassName='App-nav-active' className='App-nav-link' style={{padding: '10px'}}>Projects</NavLink>
				<NavLink exact to='/certifications' activeClassName='App-nav-active' className='App-nav-link' style={{padding: '10px'}}>Certifications</NavLink>
				<NavLink exact to='/contact-me' activeClassName='App-nav-active' className='App-nav-link' style={{padding: '10px'}}>Contact Me</NavLink>
			</nav>

			<button onClick={changeTheme}>Change theme</button>
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
