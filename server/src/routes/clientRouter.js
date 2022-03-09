import express from "express"

const router = new express.Router()

// server/src/routers/clientRouter.js
const clientRoutes = ["/", "/bars", "/bars/:id"]

router.get(clientRoutes, (req, res) => {
  res.render("client")
})

export default router
