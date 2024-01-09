import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const clientRouter = new express.Router()

// server/src/routers/clientRouter.js
const clientRoutes = ["/", "/bars", "/bars/:id"]

clientRouter.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default clientRouter
