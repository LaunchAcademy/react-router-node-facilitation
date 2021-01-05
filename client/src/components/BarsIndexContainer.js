import React, { useState, useEffect }  from 'react'

import BarTile from './BarTile';

const BarsIndexContainer = (props) => {
  const [bars, setBars] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/v1/bars')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const barData = await response.json()
      setBars(barData.bars)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchBooks()
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
