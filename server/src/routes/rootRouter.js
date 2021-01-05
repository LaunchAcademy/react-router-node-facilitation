import express from "express"
import barsRouter from "./api/v1/barsRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router() 

rootRouter.use("/api/v1/bars", barsRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
