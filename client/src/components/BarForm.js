import React from  "react"

const BarForm = (props) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:
        <input 
          id="name"
          type="text"
          name="name"
        />
      </label>
      
      <label htmlFor="address">Address:
        <input 
          id="address"
          type="text"
          name="address"
        />
      </label>
      
      <label htmlFor="hoursOfOperation">Hours:
        <input 
          id="hoursOfOperation"
          type="text"
          name="hoursOfOperation"
        />
      </label>
      
      <label htmlFor="coverCharge">Cover Charge:
        <input 
          id="coverCharge"
          type="text"
          name="coverCharge"
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default BarForm