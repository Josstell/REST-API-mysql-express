import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import employeesRoutes from "./routes/employes.routes.js"
import imdexRoutes from "./routes/index.routes.js"
import uploadRoutes from "./routes/upload.routes.js"

import { PORT } from "./config.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "./uploads",
	})
)

app.use(imdexRoutes)
app.use("/api", employeesRoutes)
app.use("/api", uploadRoutes)

app.use((req, res, next) => {
	res.status(404).json({ message: "endpoint not found" })
})

app.listen(PORT)

console.log("Server on port " + PORT)
