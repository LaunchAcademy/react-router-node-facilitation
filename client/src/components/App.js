import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BarShowContainer from "./BarShowContainer"
import BarsIndexContainer from "./BarsIndexContainer"

// import BarShowContainer from './BarShowContainer'

import Layout from "./Layout"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BarsIndexContainer} />
        <Route exact path="/bars" component={BarsIndexContainer} />
        <Route exact path="/bars/:id" component={BarShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App