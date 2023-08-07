import {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import PropTypes from 'prop-types'

import {LoadingSpinner} from "./loading/loading"
import {UsersList} from "./usersList"
import {Input} from "./input"

import image from '../assets/images/face.jpg'

export const Registration = ({userList, setUserList}) => {
    const [loading, setLoading] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = (data) => {
        setUserList([...userList, {...data, img: image, id: userList?.length + 1}])
        reset()
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [userList])


    return (
        <div>
            {
                loading ? <LoadingSpinner/> :
                <div className='form-container'>
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            className={'input'}
                            type={'text'}
                            register={register}
                            name="Name"
                            required={true}
                            errors={errors.Name}
                        />
                        <Input
                            className={'input'}
                            type={'text'}
                            register={register}
                            name="Surname"
                            required={true}
                            errors={errors.Surname}
                        />
                        <Input
                            className={'input'}
                            type={'text'}
                            register={register}
                            name="Email"
                            required={true}
                            pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                            errors={errors.Email}
                            errorMassage={'Invalid Email.'}
                        />
                        <Input
                            className={'input'}
                            type={'text'}
                            register={register}
                            name="Age"
                            required={true}
                            pattern={/\d+/}
                            errors={errors.Age}
                            errorMassage={'Please enter number for Age.'}
                        />

                        <input type="submit" value='send'/>
                    </form>

                    <UsersList setUserList={setUserList} userList={userList}/>
                </div>
            }
        </div>
    )
}

Registration.propTypes = {
    userList: PropTypes.array,
    setUserList: PropTypes.func,
}