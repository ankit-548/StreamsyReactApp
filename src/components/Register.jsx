import { Input, Button } from './index.js'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../api/auth.api.js';
import { login as loginState } from '../store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/icons/home.svg'

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
                <span className='flex items-center justify-center'>Register a new account</span>
                <form className='flex flex-col items-center justify-center md:grid grid-cols-2 gap-1' onSubmit={handleSubmit(registeruser)} encType='multipart/form-data'>
                    <div>
                        <Input label="UserName" type="text" placeholder="username" className="w-full m-1" {...register('userName', {required: true})}/>
                        {errors.userName && <p>userName is required</p>}                        
                    </div>
                    <div>
                        <Input label="Email" type="email" placeholder="email" className="w-full m-1" {...register('email', {required: true})}/>
                        {errors.email && <p>email is required</p>}
                    </div>
                    <div>
                        <Input label="Password" type="password" placeholder="password" className="w-full m-1" {...register('password', {required: true})}/>
                        {errors.password && <p>password is required</p>}
                    </div>
                    <div>
                        <Input label="FullName" type="fullName" placeholder="fullName" className="w-full m-1" {...register('fullName', {required: true})}/>
                        {errors.fullName && <p>fullName is required</p>}
                    </div>
                    <div>
                        <Input label="coverImage" type="file" placeholder="coverImage" className="w-full m-1" {...register('coverImage', {})}/>
                        {errors.coverImage && <p>coverImage is required</p>}
                    </div>
                    <div>
                        <Input label="avatar" type="file" placeholder="avatar" className="w-full m-1" {...register('avatar', {required: true})}/>
                        {errors.avatar && <p>avatar is required</p>}
                    </div>
                    <div></div>
                    <Button className='w-full' children="Sign up"/>
                </form>
                <div>
                    <span className='flex items-center justify-center'>Already registered ? <Link to='/login' className='text-blue-500 m-1'>SignIn</Link></span>
                </div>
                <Link className="flex justify-center" to='/'><img src={homeIcon} className="h-10 w-10"></img></Link>
            </div>
        </div>
    )
}

export default Register;