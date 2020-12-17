import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration';

import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/page/:uid" component={Page} />
          <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
