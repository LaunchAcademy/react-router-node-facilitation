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
  console.log(props);

  const fetchBar = async () => {
    const barId = props.match.params.id
    
    try {
      const response = await fetch(`/api/v1/bars/${barId}`)
      if (!response.ok) {
        const errorMessage = `Uh oh!`
        const error = new Error(errorMessage)
        throw(error)
      }

      const responseBody = await response.json()
      // debugger
      setBarRecord(responseBody.bar)

    } catch(error) {
      console.log(`Aw dang Error in Fetch: ${error.message}`);
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
