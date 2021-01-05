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
    const barId = props.match.params.id
    try {
      const response = await fetch(`/api/v1/bar/${barId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const bookData = await response.json()
      setBarRecord(bookData.bar)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  useEffect(() => {
    fetchBar()
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
