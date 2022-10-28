import { Router } from "express"

import {
	createEmployees,
	getEmployees,
	updateEmployees,
	deleteEmployees,
	getEmployee,
} from "../controllers/employees.controller.js"

const router = Router()

router.get("/employees", getEmployees)

router.get("/employees/:id", getEmployee)

router.post("/employees", createEmployees)

router.put("/employees/:id", updateEmployees)

router.delete("/employees/:id", deleteEmployees)

export default router
