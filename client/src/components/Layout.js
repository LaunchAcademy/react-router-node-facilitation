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
        
      </div>

      <div className="top-bar">
        FOOTER
      </div>
    </div>
  )
}

export default Layout;
