import express from "express"
import path from "path"
import { fileURLToPath } from 'url'
import logger from "morgan"
import bodyParser from "body-parser"
import hbsMiddleware from "express-handlebars"
import rootRouter from "./routes/rootRouter.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "./views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../../client/public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(rootRouter);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

export default app
