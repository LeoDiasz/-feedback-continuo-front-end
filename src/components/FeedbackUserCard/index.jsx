import { useState } from 'react'
import Switch from 'react-switch'
import { apiDbc } from '../../services/api'
import { TagsList } from '../TagsList'
import { AvatarUser } from "../../components/AvatarUser"
import { FeedbackContent, DivDatasUser, DivMessageFeedback } from './styles'

export const FeedbackUserCard = ({ feedbackDatas, type }) => {
    const [isPublicFeedback, setIsPublicFeedback] = useState(() => {
        if (feedbackDatas.publico) {
            return true
        } else {
            return false
        }
    })

    const changeVisibleFeedbackReceveid = async () => {

        setIsPublicFeedback(isPublicFeedback ? false : true)   

        let updateVisible

        updateVisible = isPublicFeedback ? false : true
        
        try {
            await apiDbc.put(`/feedback?idFeedback=${feedbackDatas.idFeedback}&publico=${updateVisible}`)

        } catch (Error) {
            console.log(Error)
        }
        
    }
    
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
                {type === "feedbacksGiven" && (
                    <Switch
                        onChange={changeVisibleFeedbackReceveid}
                        checked={isPublicFeedback}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={20}

                    />
                )}
            </DivMessageFeedback>
        </FeedbackContent >
    )
}