import express from "express"
import { pool } from "./db/db.js"

const app = express()

app.get("/ping", async (req, res) => {
	const [result] = await pool.query('SELECT "pong" as result')
	res.json(result[0])
})

app.listen(4000)

console.log("server on port 4000")
