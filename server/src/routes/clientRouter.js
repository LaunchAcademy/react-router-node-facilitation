import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

// server/src/routers/clientRouter.js

// localhost:3000/bars
const clientRoutes = ["/", "/bars", "/bars/:id"]

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
