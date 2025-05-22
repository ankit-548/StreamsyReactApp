import axiosInstance from './axiosConfig/axiosInstance.js'

async function loginUser(formData) {
    return await axiosInstance.post('/login', formData)
}

async function logoutUser() {
    return await axiosInstance.post('/logout');
}

export { loginUser,logoutUser }