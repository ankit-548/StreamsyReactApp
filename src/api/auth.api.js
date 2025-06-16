import axiosInstance from './axiosConfig/axiosInstance.js'

async function registerUser(formData) {
    return await axiosInstance.post('/user/register', formData)
}

async function loginUser(formData) {
    return await axiosInstance.post('/user/login', formData)
}

async function logoutUser() {
    return await axiosInstance.post('/user/logout');
}

export { registerUser,loginUser,logoutUser }