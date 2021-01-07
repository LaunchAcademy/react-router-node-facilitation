import React, { useEffect, useState } from 'react'

import BarTile from './BarTile';
import BarForm from "./BarForm"

const BarsIndexContainer = (props) => {
 
  // debugger
  
  const [bars, setBars] = useState([])
 
  const getBars = async () => {
    const response = await fetch("/api/v1/bars")
    const responseBody = await response.json()
    // debugger
    setBars(responseBody)
  }
  
  useEffect(() => {
    // debugger
    getBars()
  }, [])

  const addNewBar = async (barPayload) => {
    // debugger
    try {
      const response = await fetch("/api/v1/bars", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(barPayload)
      })
      if (!response.ok) {
        // error handling
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      
      const responseBody = await response.json()
      // debugger
      if (responseBody.bar) {
        setBars([
          ...bars,
          responseBody
        ])
      }
    } catch(err) {
      console.error(`Something went wrong in fetch! ${err}`)
    }

  }
  
  // const barTiles = props.data.bars.map((bar) => {
  
  const barTiles = bars.map((bar) => {
    // debugger
    
    return (
      <BarTile
        key={bar.id}
        name={bar.name}
        address={bar.address}
        hoursOfOperation={bar.hoursOfOperation}
        coverCharge={bar.coverCharge}
      />
    )
  })

  return(
    <div className="bars-container">
      <h2> I am the Bars Index Container </h2>
      <BarForm 
        addNewBar={addNewBar}
      />
      {barTiles}
    </div>
  )
}

export default BarsIndexContainer;
