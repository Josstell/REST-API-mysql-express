import express from "express"
import employeesRoutes from "./routes/employes.routes.js"
import imdexRoutes from "./routes/index.routes.js"

const app = express()

app.use(express.json())

app.use(imdexRoutes)

app.use(employeesRoutes)

app.listen(4000)

console.log("server on port 4000")
