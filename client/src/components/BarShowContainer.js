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

  
  const getBar = async () => {

    const barId = props.match.params.id

    const response = await fetch(`/api/v1/bars/${barId}`)
    const parsedBarData = await response.json()
    // console.log(parsedBarData)
    setBarRecord(parsedBarData.bar)
  }

  useEffect(() => {
    getBar()
  }, [])

  return(
    <div className="bars-container">
      <h3> Bar Show Container </h3>
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
