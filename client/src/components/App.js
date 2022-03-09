import React from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "../assets/scss/main.scss"

// import BarShowContainer from './BarShowContainer'
// import BarsIndexContainer from './BarsIndexContainer'
import Layout from "./Layout"


const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout}/>
    </BrowserRouter>
  )
}

export default hot(App)