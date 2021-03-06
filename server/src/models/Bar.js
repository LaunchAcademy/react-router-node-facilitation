import fs from "fs"
import _ from "lodash"

const barsPath = "bars.json"

class Bar {
  constructor({ id, name, address, coverCharge, hoursOfOperation, reviews }) {
    this.id = id
    this.name = name
    this.address = address
    this.coverCharge = coverCharge
    this.hoursOfOperation = hoursOfOperation
    this.reviews = reviews
  }

  static findAll() {
    const barData = JSON.parse(fs.readFileSync(barsPath)).bars
    let bars = []
    barData.forEach(bar => {
      const newBar = new Bar(bar)
      bars.push(newBar)
    })
    return bars
  }

  static findById(id) {
    const barData = JSON.parse(fs.readFileSync(barsPath)).bars
    const myBar = barData.find(bar => bar.id == id)
    return new Bar(myBar)
  }

  static getNextBarId() {
    const maxBar = _.maxBy(this.findAll(), bar => bar.id)
    return maxBar.id + 1
  }
}

export default Bar