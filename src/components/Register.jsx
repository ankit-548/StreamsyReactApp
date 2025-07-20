import { Input, Button } from './index.js'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../api/auth.api.js';
import { login as loginState } from '../store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    console.log(errors)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function registeruser(data) {
        try {
            if(data) {
                // Convert form data in formData object It automatically sets the correct Content-Type for file uploads.
                const formData = new FormData()
                formData.append('userName', data.userName)
                formData.append('email', data.email)
                formData.append('password', data.password)
                formData.append('fullName', data.fullName)
                if(data.coverImage && data.coverImage[0]) {
                    formData.append('coverImage', data.coverImage[0])                    
                }
                if(data.avatar && data.avatar[0]) {
                    formData.append('avatar', data.avatar[0])
                }
                console.log("User Data to register", formData)
                const userData = await registerUser(formData)
                if(userData) {
                    console.log(userData)
                    dispatch(loginState(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            console.log("Error:couldn't register", error)
        }
    }
    return (
        <div className='flex items-center h-svh w-full justify-center bg-[url(./assets/white-blurreed-bg.jpg)] bg-cover bg-center'>
            <div className='w-auto h-auto p-4 rounded-xl bg-white'>
                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(registeruser)} encType='multipart/form-data'>
                    <span>Register a new account</span>
                    <Input label="UserName" type="text" placeholder="username" className="" {...register('userName', {required: true})}/>
                    {errors.userName && <p>userName is required</p>}
                    <Input label="Email" type="email" placeholder="email" className="" {...register('email', {required: true})}/>
                    {errors.email && <p>email is required</p>}
                    <Input label="Password" type="password" placeholder="password" className="" {...register('password', {required: true})}/>
                    {errors.password && <p>password is required</p>}
                    <Input label="FullName" type="fullName" placeholder="fullName" className="" {...register('fullName', {required: true})}/>
                    {errors.fullName && <p>fullName is required</p>}
                    <Input label="coverImage" type="file" placeholder="coverImage" className="" {...register('coverImage', {})}/>
                    {errors.coverImage && <p>coverImage is required</p>}
                    <Input label="avatar" type="file" placeholder="avatar" className="" {...register('avatar', {required: true})}/>
                    {errors.avatar && <p>avatar is required</p>}
                    <Button className='w-full' children="Sign up"/>
                    <span>Already registered ? <Link to='/login' className='text-blue-500'>SignIn</Link></span>
                    <Link to='/'><span class="material-symbols-outlined">home</span></Link>
                </form>
            </div>
        </div>
    )
}

export default Register;