import {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"

import {addUser} from "../store/userList/userList.action"

import {LoadingSpinner} from "./loading/loading"
import {UsersList} from "./usersList"
import {Input} from "./input"

import image from '../assets/images/face.jpg'

export const Registration = () => {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const { list } = useSelector( store => ({
        list: store.userListReducer.list
    }) )

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = (data) => {
        dispatch(addUser([...list, {...data, img: image, id: list?.length + 1}]))
        reset()
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [list])


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
                    <UsersList/>
                </div>
            }
        </div>
    )
}

