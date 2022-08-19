import { TagsList } from '../TagsList'
import { AvatarUser } from "../../components/AvatarUser"
import uploadUser from "../../images/uploadUser.jpg"
import { FeedbackContent, DivDatasUser, DivMessageFeedback } from './styles'

export const FeedbackUserCard = ({ feedbackDatas }) => {

    return (
        <FeedbackContent>
            <DivDatasUser key={feedbackDatas.idFeedback}>
                <AvatarUser img={uploadUser} width="75px" />
                <h4>Leonardo</h4>
                <p>Cargo</p>
                <small>Email</small>
            </DivDatasUser>
            <DivMessageFeedback>
                <p>{feedbackDatas.message}</p>
                <TagsList listTags={feedbackDatas.tagsList} isNotShowDelete />
            </DivMessageFeedback>
        </FeedbackContent >
    )
}