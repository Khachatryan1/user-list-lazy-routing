import {useNavigate} from "react-router"
import {useForm} from "react-hook-form"

import {Input} from "../components/input"

const email = 'admin@gmail.com'
const password = 'password'

const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm()

    const onSubmit = (data) => {
        if (data?.Email === email && data?.Password === password) {
            navigate('/home')
        } else {
            if (data?.Email !== email) {
                setError("Email")
            }
            if (data?.Password !== password) {
                setError("Password")
            }
        }
    }

    return (
        <div className={'login-page'}>
            <h2>LOG IN!</h2>
            <form className={'login-form'} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    className={'login-input'}
                    type={'text'}
                    name={'Email'}
                    register={register}
                    required={true}
                    pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                    errors={errors.Email}
                    errorMassage={'Invalid Email.'}
                />
                <Input
                    className={'login-input'}
                    type={'password'}
                    name={'Password'}
                    register={register}
                    required={true}
                    errors={errors.Password}
                    errorMassage={'Invalid Password.'}
                />
                <input className={'login-submit'} type="submit" value='LOG IN'/>
            </form>
        </div>
    )

}

export default Login