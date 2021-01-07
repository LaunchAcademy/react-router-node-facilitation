import React from 'react'

const BarTile = (props) => {
  // const { id, name, address, hoursOfOperation, coverCharge } = props
  
  // debugger
  return(
    <div className="bar">
      <h1>{props.name}</h1>

      <h3>Address: {props.address} </h3>
      <h3>Hours of Operation: {props.hoursOfOperation} </h3>
      <h3>Cover Charge: {props.coverCharge} </h3>
    </div>
  )
}

export default BarTile;
