import { useForm } from "react-hook-form"
import Input from "./Input.jsx"
import {useDispatch} from 'react-redux'
import {loginUser} from '../api/auth.api.js'
import {login as loginReducer} from '../store/authSlice.js'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button from "./Button.jsx"

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleLogin(data) {
        try {
            if(data) {
                const userData = await loginUser(data)
                if(userData) {
                    dispatch(loginReducer(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            console.log("Error: Login error", error.message)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 via-indigo-500 to-pink-500 backdrop-blur-3xl">
            <div className="w-1/3 h-50 rounded-xl bg-gray-50">
                <span>Don't have an account? </span>
                <Link to="/register">signup</Link>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <Input label="Email" type="email" placeholder="Enter user email" {...register('email', {required:true})}/>
                    {errors.email && <p>email field is required</p>}
                    <Input label="Password" type="password" placeholder="Enter user password" {...register('password', {required: true})}/>
                    {errors.password && <p>please enter correct password</p>}
                    <Button children="Submit"/> 
                </form>
            </div>
        </div>
    )
}

export default Login