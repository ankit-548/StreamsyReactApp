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
            const status = await logoutUser()
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
        <Button onClick={logoutHandler} className="bg-red-500">Logout</Button>
        </>
    )
}

export default Logout