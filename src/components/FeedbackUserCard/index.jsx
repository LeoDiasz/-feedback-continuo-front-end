import { FeedbackContent } from './styles'
import uploadUser from "../../images/uploadUser.jpg"
import { AvatarUser } from "../../components/AvatarUser"

export const FeedbackUserCard = () => {
    
    return (
        <FeedbackContent >
            <div>
                <AvatarUser img={uploadUser} width="80px"/>
                <h1>Lucas Araujo</h1>
                <p>Cargo</p>
                <p>Email</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, harum optio! Reprehenderit dignissimos rerum delectus quae provident in placeat veniam maxime consequatur asperiores impedit, unde nihil vel obcaecati aspernatur! Optio consequatur illum qui asperiores? Itaque explicabo, consectetur ad, cum quidem laudantium temporibus eveniet ex expedita dicta ab perspiciatis magni enim!</p>
            </div>
        </FeedbackContent>
    )
}