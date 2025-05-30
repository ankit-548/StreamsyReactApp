import { Input, Button } from './index.js'
import { useForm } from 'react-hook-form';

function Register() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    console.log(errors)
    return (
        <>
            <form onSubmit={handleSubmit(data)}>
                <Input label="UserName" type="text" placeholder="username" className="" {...register('userName', {required: true})}/>
                {errors.userName && <p>userName is required</p>}
                <Input label="Email" type="email" placeholder="email" className="" {...register('email', {required: true})}/>
                {errors.email && <p>email is required</p>}
                <Input label="Password" type="password" placeholder="password" className="" {...register('password', {required: true})}/>
                {errors.password && <p>password is required</p>}
                <Input label="FullName" type="fullName" placeholder="fullName" className="" {...register('fullName', {required: true})}/>
                {errors.fullName && <p>fullName is required</p>}
                <Input label="" type="" placeholder="coverImage" className="" {...register('coverImage', {})}/>
                {errors.coverImage && <p>coverImage is required</p>}
                <Input label="" type="" placeholder="avatar" className="" {...register('avatar', {required: true})}/>
                {errors.avatar && <p>avatar is required</p>}
                <Button type="submit">SignUp</Button>
            </form>
        </>
    )
}

export default Register;