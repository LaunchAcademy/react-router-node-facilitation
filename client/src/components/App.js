import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BarsIndexContainer from './BarsIndexContainer'

import barsData from "../../../server/bars.json"

const App = props => {
  return (
   <div className="layout">
     <div className="main-body">
       <BarsIndexContainer 
        data={barsData}
       />
    </div>
   </div>
  )
}

export default App