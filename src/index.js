import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './normalize.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { ContextProvider } from './context'

import ScrollToTop from './ScrollToTop'

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<Router>
				<App />
				{/* Just adding the ScrollToTop component provides better user experience with client side routing */}
				<ScrollToTop />
			</Router>
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
