import {
	deleteImage,
	deleteVideo,
	uploadImage,
	uploadVideo,
} from "../utils/cloudinary.js"

import fs from "fs-extra"

export const uploadImageToCloudinary = async (req, res) => {
	const {
		files: {
			image: { tempFilePath },
		},
	} = req

	try {
		const result = await uploadImage(tempFilePath, req.body.folder)
		const imageResponse = {
			public_id: result.public_id,
			secure_url: result.secure_url,
		}

		await fs.unlink(tempFilePath)
		res.json(imageResponse)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}

export const deleteImageFromCloudinary = async (req, res) => {
	const { id } = req.query
	console.log("hola:", encodeURI(id))
	try {
		const result = await deleteImage(id)
		res.json({ response: result, message: "Image deleted successfully" })
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}

export const uploadVideoToCloudinary = async (req, res) => {
	const {
		files: {
			video: { tempFilePath },
		},
	} = req

	try {
		const result = await uploadVideo(tempFilePath, req.body.folder)
		const VideoResponse = {
			public_id: result.public_id,
			secure_url: result.secure_url,
		}
		await fs.unlink(tempFilePath)
		res.json(VideoResponse)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}

export const deleteVideoFromCloudinary = async (req, res) => {
	const { id } = req.query
	try {
		const result = await deleteVideo(id)
		res.json({ response: result, message: "Image deleted successfully" })
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}
