import React from 'react'
import { Link } from 'react-router-dom'

const BarTile = ({ id, name, address, hoursOfOperation, coverCharge }) => {

    return(
      <div className="bar">
        <h1>

          <Link to={`/bars/${id}`}> 
            {name} 
          </Link>

        </h1>

        <h3>Address: {address} </h3>
        <h3>Hours of Operation: {hoursOfOperation} </h3>
        <h3>Cover Charge: {coverCharge} </h3>

      </div>
    )
  }

export default BarTile;
