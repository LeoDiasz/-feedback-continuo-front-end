import { FeedbackContent } from './styles'
import uploadUser from "../../images/uploadUser.jpg"
import { AvatarUser } from "../../components/AvatarUser"
import { TagsList } from '../TagsList'

export const FeedbackUserCard = ({ feedbackDatas }) => {

    return (
        <FeedbackContent>
            <div key={feedbackDatas.idFeedback}>
                <AvatarUser img={uploadUser} width="80px" />
                <h1>Leonardo</h1>
                <p>Cargo</p>
                <p>Email</p>
            </div>
            <div>
                <p>{feedbackDatas.message}</p>
            </div>
            <div>
                <TagsList listTags={feedbackDatas.tagsList} />
            </div>
        </FeedbackContent >
    )
}