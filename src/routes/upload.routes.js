import { Router } from "express"
import {
	uploadImageToCloudinary,
	deleteImageFromCloudinary,
	uploadVideoToCloudinary,
	deleteVideoFromCloudinary,
} from "../controllers/upload.controller.js"

const router = Router()

router.post("/upload/image", uploadImageToCloudinary)

router.delete("/upload/image", deleteImageFromCloudinary)

router.post("/upload/video", uploadVideoToCloudinary)

router.delete("/upload/video", deleteVideoFromCloudinary)

export default router
