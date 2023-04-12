import React from 'react';
import { Switch, Route, Link } from "react-router-dom"

import BarShowContainer from './BarShowContainer'
import BarsIndexContainer from './BarsIndexContainer'

const Layout = (props) => {
  return(
    <div className="layout">
      <div className="top-bar grid-x">
        <div className="top-bar-left">
          <Link className="site-title" to="/bars">Bars of Boston</Link>
        </div>
      </div>

      <div className="main-body">
        <Switch>
          <Route exact path="/" component={BarsIndexContainer} />
          <Route exact path="/bars" component={BarsIndexContainer} />
          <Route exact path="/bars/:id" component={BarShowContainer} />
        </Switch>
    
      </div>

      <div className="top-bar">
        FOOTER
      </div>
    </div>
  )
}

export default Layout;
