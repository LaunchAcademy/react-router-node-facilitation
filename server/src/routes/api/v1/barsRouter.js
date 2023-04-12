import express from "express"

import Bar from "../../../models/Bar.js"

const barsRouter = express.Router()

barsRouter.get("/", (req, res) => {
  const barObjects = Bar.findAll()
  res.set({ 'Content-Type': 'application/json' }).status(200).json(barObjects)
})

barsRouter.get("/:id", (req, res) => {
  console.log(req.params);
  const bar = Bar.findById(req.params.id)
  if(bar) {
    res.status(200).json({ bar: bar })
  } else {
    res.status(404)
  }
})

export default barsRouter