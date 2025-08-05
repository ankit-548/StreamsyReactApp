import axiosInstance from "./axiosConfig/axiosInstance"

async function uploadVideo(formData) {
    return await axiosInstance.post('/video/upload', formData)
}

export {
    uploadVideo,
}