import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BarsIndexContainer from './BarsIndexContainer'

const App = props => {
  return (
   <div className="layout">
     <div className="main-body">
       <BarsIndexContainer />
    </div>
   </div>
  )
}

export default App