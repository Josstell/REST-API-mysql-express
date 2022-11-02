import { v2 as cloudinary } from "cloudinary"

import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
} from "../config.js"

cloudinary.config({
	cloud_name: `${CLOUDINARY_CLOUD_NAME}`,
	api_key: `${CLOUDINARY_API_KEY}`,
	api_secret: `${CLOUDINARY_API_SECRET}`,
	secure: true,
})

export async function uploadImage(filePath, folder) {
	return await cloudinary.uploader.upload(filePath, {
		folder: `Mariachon/${folder}/images`,
	})
}

export async function deleteImage(publicId) {
	return await cloudinary.uploader.destroy(publicId)
}

export async function uploadVideo(filePath, folder) {
	return await cloudinary.uploader.upload(filePath, {
		resource_type: "video",
		folder: `Mariachon/${folder}/videos`,
	})
}

export async function deleteVideo(publicId) {
	return await cloudinary.uploader.destroy(publicId, { resource_type: "video" })
}
