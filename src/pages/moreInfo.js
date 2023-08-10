import {Button} from "../components/button"
import {useNavigate, useParams} from "react-router"
import {useSelector} from "react-redux"


export const MoreInfo = () => {
    const params = useParams()
    const navigate = useNavigate()

    const { list } = useSelector( store => ({
        list: store.userListReducer.list
    }) )

    const current = list?.find((user) => user?.id === + params?.id)

    return (
        <div className={'moreInfo'}>
            <div className={'info'}>
                <div className={'img-container'}>
                    <img src={current.img} alt={'user image'}/>
                </div>
                <div className={'personal-info'}>
                    <div>
                        <span>NAME:</span>
                        <p>{current.Name}</p>
                    </div>
                    <div>
                        <span>SURNAME:</span>
                        <p>{current.Surname}</p>
                    </div>
                    <div>
                        <span>AGE:</span>
                        <p>{current.Age}</p>
                    </div>
                    <div>
                        <span>EMAIL:</span>
                        <p>{current.Email}</p>
                    </div>
                    <Button className={'more-info-button'} text={'HOME'} onClick={() => navigate('/home')}/>
                </div>

            </div>

        </div>
    )
}