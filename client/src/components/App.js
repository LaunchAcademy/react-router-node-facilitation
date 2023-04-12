import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BarsIndexContainer from "./BarsIndexContainer"

import BarShowContainer from './BarShowContainer'

import Layout from "./Layout"

const App = props => {
  return (
    <BrowserRouter>
      
      <Route path="/" component={Layout}/>

    </BrowserRouter>
  )
}

export default App