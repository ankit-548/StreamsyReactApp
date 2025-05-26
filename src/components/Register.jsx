import { Input, Button } from './index.js'
import { useForm } from 'react-hook-form';

function Register() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit(data)}>
                <label></label>
                <Input/>
                <label></label>
                <Input/>
                <Button/>
            </form>
        </>
    )
}

export default Register;