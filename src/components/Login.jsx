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
                console.log('data', data)
                const userData = await loginUser(data)
                console.log('userData', userData)
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
        <div className="flex w-full h-svh items-center justify-center  bg-[url(./assets/blurred-colorful-background.jpg)] bg-cover bg-center">
            <div className="flex flex-col items-center justify-center w-1/4 h-1/2 rounded-xl bg-gray-50">
                <div>
                    <span>Don't have an account? </span>
                    <Link to="/register" className="text-blue-500">signup</Link>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
                    <Input label="Email" type="email" placeholder="Enter user email" {...register('email', {required:true})}/>
                    {errors.email && <p className="text-red-400">email field is required</p>}
                    <Input label="Password" type="password" placeholder="Enter user password" {...register('password', {required: true})}/>
                    {errors.password && <p className="text-red-400">please enter correct password</p>}
                    <Button children="Submit"/> 
                </form>
            </div>
        </div>
    )
}

export default Login