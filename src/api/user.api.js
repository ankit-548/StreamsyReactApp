import axiosInstance from "./axiosConfig/axiosInstance"

async function getLoggedInUserDetails() {
    return await axiosInstance.get('/user/getCurrentUser')
}


export {
    getLoggedInUserDetails,
}