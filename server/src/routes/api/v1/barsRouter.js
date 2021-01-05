import express from "express"

import Bar from "../../../models/Bar.js"

const barsRouter = express.Router()

barsRouter.get("/", (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).status(200).json(Bar.findAll())
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

barsRouter.post("/", (req, res) => {
  const {title, content} = req.body
  const bar = new Bar({ title, content })
  if(bar.save()) {
    res.status(201).json({ bar: bar })
  } else {
    res.status(422).json({ errors: bar.errors })
  }
})

export default barsRouter