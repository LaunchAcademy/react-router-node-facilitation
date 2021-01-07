import React, { useEffect, useState } from 'react'

import BarTile from './BarTile';

const BarsIndexContainer = (props) => {
 
  // debugger
  
  const barTiles = props.data.bars.map((bar) => {
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
      {barTiles}
    </div>
  )
}

export default BarsIndexContainer;
