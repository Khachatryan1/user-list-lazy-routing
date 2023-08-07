import {memo} from "react"
import PropTypes from 'prop-types'
import {useNavigate} from "react-router"

import {Button} from "./button"



export const UsersList = memo(({userList, setUserList}) => {
    const navigate = useNavigate()

    const handleDelete = (id) => {
        const newList = userList.filter((user) => user.id !== id)
        setUserList(newList)
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
                {userList?.map((user) => (
                    <tr key={user.id}>
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

UsersList.propTypes = {
    userList: PropTypes.array,
    setUserList: PropTypes.func,
}