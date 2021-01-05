import React, { useState, useEffect }  from 'react'
import Bar from './Bar'

const BarShowContainer = (props) => {
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    coverCharge: null,
    hoursOfOperation: "",
    reviews: []
  })

  const fetchBar = async () => {

  }

  useEffect(() => {
    
  }, [])

  return(
    <div className="bars-container">
      <h3> Bar Showssssssss Container </h3>
      <Bar
        key={barRecord.id}
        id={barRecord.id}
        name={barRecord.name}
        reviews={barRecord.reviews}
      />
    </div>
  )
}

export default BarShowContainer
