import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
	withRouter,
	useLocation
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration';
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";
import "./styles/main.scss";

import { Header } from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

// https://ui.dev/react-router-v4-animated-transitions/

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Header />
				<div className="content">
					<Route render={({ location }) => (
						<SwitchTransition mode="out-in">
							<CSSTransition
								key={location.key}
								classNames="fade"
								unmountOnExit
								timeout={166}>
								<div className="anim">
									<Switch location={location}>
										<Route exact path="/" component={Homepage} />
										<Route exact path="/projects/:uid" component={ProjectDetail} />
										<Route exact path="/projects" component={Homepage} />
									</Switch>
								</div>
							</CSSTransition>
						</SwitchTransition>
					)}
					/>
				</div>

			</BrowserRouter>
		</Fragment>
	)
}

export default App
