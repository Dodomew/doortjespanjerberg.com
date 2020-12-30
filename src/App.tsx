import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration';
import "./styles/main.scss";

import { Header } from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/projects/:uid" component={ProjectDetail} />
            {/* <Route exact path="/page/:uid" component={Page} />
            <Route component={NotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
