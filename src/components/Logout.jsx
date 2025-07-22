import Button from './Button.jsx'
import {logoutUser} from '../api/auth.api.js'
import {logout as logoutReducer} from '../store/authSlice.js'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
 
function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function logoutHandler(e) {
        try {
            console.log('logouthandler called')
            const status = await logoutUser()
            console.log('logouthandler called status', status)
            if(status) {
                dispatch(logoutReducer())
                navigate('/')
            }
        } catch (error) {
            console.log("Error: error while logout", error.message)
        }
    }

    return (
        <>
        <Button onClick={logoutHandler} className="rounded-xl px-4 py-1 bg-blue-500 text-white hover:border-black hover:border-2 hover:bg-white hover:text-black">Logout</Button>
        </>
    )
}

export default Logout