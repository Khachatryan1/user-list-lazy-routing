import {Registration} from "../components/registration"
import PropTypes from 'prop-types'

const Home = ({userList, setUserList}) => {
    return (
        <div>
            <Registration userList={userList} setUserList={setUserList}/>
        </div>
    )
}

Home.propTypes = {
    userList: PropTypes.array,
    setUserList: PropTypes.func,
}

export default Home