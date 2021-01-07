import express from "express"

import Bar from "../../../models/Bar.js"

const barsRouter = express.Router()

barsRouter.get("/", async (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).status(200).json(Bar.findAll())
})

// barsRouter.get("/:id", (req, res) => {
//   console.log(req.params);
//   const bar = Bar.findById(req.params.id)
//   if(bar) {
//     res.status(200).json({ bar: bar })
//   } else {
//     res.status(404)
//   }
// })

barsRouter.post("/", (req,res) => {
  // debugger
  // console.log(req)
  // console.log(req.body)
  const body = req.body
  const newBar = new Bar(body)
  res.set({ 'Content-Type': 'application/json' }).status(201).json(newBar)
})

export default barsRouter