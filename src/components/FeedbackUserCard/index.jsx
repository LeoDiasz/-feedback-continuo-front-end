import { TagsList } from '../TagsList'
import { AvatarUser } from "../../components/AvatarUser"
import { FeedbackContent, DivDatasUser, DivMessageFeedback } from './styles'

export const FeedbackUserCard = ({ feedbackDatas, type }) => {
    
    return (
        <FeedbackContent>
            <DivDatasUser>
                {type === 'feedbacksGiven' ? (
                    <>
                        <AvatarUser img={feedbackDatas.feedbacksGiven.avatar} width="75px" />
                        <h4>{feedbackDatas.feedbacksGiven.name}</h4>
                        <p>{feedbackDatas.feedbacksGiven.userRole}</p>
                    </>
                ) : (
                    <>
                        <AvatarUser img={feedbackDatas.feedbackEntityReceived.avatar} width="75px" />
                        <h4>{feedbackDatas.feedbackEntityReceived.name}</h4>
                        <p>{feedbackDatas.feedbackEntityReceived.userRole}</p>
                    </>
                )}
            </DivDatasUser>
            <DivMessageFeedback>
                <p>{feedbackDatas.message}</p>
                <TagsList listTags={feedbackDatas.tagsList} isNotShowDelete />
            </DivMessageFeedback>
        </FeedbackContent >
    )
}