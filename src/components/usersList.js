import {memo, useContext} from "react"
import {useNavigate} from "react-router"

import {Button} from "./button"
import {CustomContext} from "../utils/context"


export const UsersList = memo(() => {
    const {list, setList} = useContext(CustomContext)
    const navigate = useNavigate()

    const handleDelete = (userId) => {
        setList(list.filter((user) => user.id !== userId))
    }

    return (
        <div>
            <table className='table'>
                <thead className='thead'>
                <tr>
                    <th className='thstyle'>Name</th>
                    <th className='thstyle'>Surname</th>
                    <th className='thstyle'>Age</th>
                    <th className='thstyle'>Email</th>
                    <th className='thstyle'>Actions</th>
                </tr>
                </thead>
                <tbody>
                {list?.map((user) => (
                    <tr key={`${user.id} ${user.Name} ${user.email}`}>
                        <td className='tdStyle'>{user.Name}</td>
                        <td className='tdStyle'>{user.Surname}</td>
                        <td className='tdStyle'>{user.Age}</td>
                        <td className='tdStyle'>{user.Email}</td>
                        <td className='tButtons tdStyle'>
                            <Button className='update' text='Update' />
                            <Button onClick={() => handleDelete(user.id)} className='delete' text='Delete' />
                            <Button onClick={() => navigate(`/moreinfo/${user?.id}`)} className='view' text='View' />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
})

