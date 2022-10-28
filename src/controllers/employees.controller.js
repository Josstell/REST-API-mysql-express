import { pool } from "../db/db.js"

export const getEmployees = async (req, res) => {
	const [rows] = await pool.query("SELECT * FROM employee")
	res.send(rows)
}

export const getEmployee = async (req, res) => {
	const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [
		req.params.id,
	])

	if (rows.length <= 0)
		return res.status(404).json({ message: "Employee not found" })
	res.send(rows[0])
}

export const createEmployees = async (req, res) => {
	const { name, salary } = req.body
	const [rows] = await pool.query(
		"INSERT INTO employee(name, salary) VALUES (?,?)",
		[name, salary]
	)
	res.send({ id: rows.insertId, name, salary })
}

export const updateEmployees = (req, res) => res.send("actualizando empleados")

export const deleteEmployees = (req, res) => res.send("eliminando empleados")
