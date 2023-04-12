import React, { useState, useEffect }  from 'react'

import BarTile from './BarTile';

const BarsIndexContainer = (props) => {
  const [bars, setBars] = useState([])

  const getBars = async () => {
    const response = await fetch("/api/v1/bars")
    const barsObject = await response.json()
    
    setBars(barsObject)
  }

  useEffect(() => {
    getBars()
  }, [])

  const barTiles = bars.map(bar => {
    return(
      <BarTile
        key={bar.id}
        id={bar.id}
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
      {barTiles}
    </div>
  )
}

export default BarsIndexContainer;
