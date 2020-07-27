import React, { useContext } from 'react'
import './App.css'
import { Context } from './context'
import { NavLink, Route, Switch } from 'react-router-dom'
import AboutMe from './aboutMe'
import Projects from './projects'

function App() {
	const { theme, setTheme } = useContext(Context)

	const changeTheme = () => {
		setTheme(prevTheme => prevTheme === 'lite' ? 'dark' : 'lite')
	}

	return (
		<div className='App'>
			App
			<p>Theme: {theme}</p>
			<button onClick={changeTheme}>Change theme</button>

			<nav className='App-nav'>
				<NavLink exact to='/about-me' activeClassName='App-nav-active' className='App-nav-link'>About Me</NavLink>
				<NavLink exact to='/projects' activeClassName='App-nav-active' className='App-nav-link'>Projects</NavLink>
			</nav>

			<Switch>
				<Route exact path='/about-me'>
					<AboutMe />
				</Route>
				<Route exact path='/projects'>
					<Projects />
				</Route>
			</Switch>
		</div>
	)
}

export default App;
