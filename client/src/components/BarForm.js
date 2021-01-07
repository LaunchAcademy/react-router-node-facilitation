import React, { useState } from  "react"

const BarForm = (props) => {
  const [barRecord, setBarRecord] = useState({
    name: "",
    address: "",
    hoursOfOperation: "",
    coverCharge: ""
  })
  
  const handleChange = (event) => {
    setBarRecord({
      ...barRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // debugger
    props.addNewBar(barRecord)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:
        <input 
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={barRecord.name}
        />
      </label>
      
      <label htmlFor="address">Address:
        <input 
          id="address"
          type="text"
          name="address"
          onChange={handleChange}
          value={barRecord.address}
        />
      </label>
      
      <label htmlFor="hoursOfOperation">Hours:
        <input 
          id="hoursOfOperation"
          type="text"
          name="hoursOfOperation"
          onChange={handleChange}
          value={barRecord.hoursOfOperation}
        />
      </label>
      
      <label htmlFor="coverCharge">Cover Charge:
        <input 
          id="coverCharge"
          type="text"
          name="coverCharge"
          onChange={handleChange}
          value={barRecord.coverCharge}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default BarForm