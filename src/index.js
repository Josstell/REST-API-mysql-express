import express from "express"
import employeesRoutes from "./routes/employes.routes.js"
import imdexRoutes from "./routes/index.routes.js"

import { PORT } from "./config.js"

const app = express()

app.use(express.json())

app.use(imdexRoutes)

app.use("/api", employeesRoutes)

app.use((req, res, next) => {
	res.status(404).json({ message: "endpoint not found" })
})

app.listen(PORT)

console.log("Server on port " + PORT)
