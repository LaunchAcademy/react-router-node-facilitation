import React, { useState, useEffect }  from 'react'

import Review from "./Review"

const BarShowContainer = (props) => {
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    coverCharge: null,
    hoursOfOperation: "",
    reviews: []
  })

  const barId = props.match.params.id

  const getSpecificBar = async () => {
    const response = await fetch(`/api/v1/bars/${barId}`)
    const barData = await response.json()
    setBarRecord(barData.bar)
  }

  
  useEffect(() => {
    getSpecificBar()
  }, [])

  const barReviews = barRecord.reviews.map(review => {
    return(
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })


  return(
    <div className="bars-container">
      <h3> Bar Show Container </h3>
      <h2>{barRecord.name}</h2>
      <p>{barRecord.address}</p>
      <p>{barRecord.coverCharge}</p>
      <p>{barRecord.hoursOfOperation}</p>
      {barReviews}
    </div>
  )
}

export default BarShowContainer
