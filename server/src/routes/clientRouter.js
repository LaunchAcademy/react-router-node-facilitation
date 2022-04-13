import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

// "localhost:3000/bars"


// server/src/routers/clientRouter.js
const clientRoutes = ["/", "/bars", "/bars/:id"]

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
