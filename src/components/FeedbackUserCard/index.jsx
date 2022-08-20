import { useState } from 'react'
import Switch from 'react-switch'
import { apiDbc } from '../../services/api'
import { TagsList } from '../TagsList'
import { AvatarUser } from "../../components/AvatarUser"
import { FeedbackContent, DivDatasUser, DivMessageFeedback } from './styles'
import { useUserContext } from '../../hooks/useUserContext'

export const FeedbackUserCard = ({ feedbackDatas, type }) => {
    const { user } = useUserContext()

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
        <FeedbackContent type={type}>
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
            {type === "feedbacksGiven" && feedbackDatas.feedbackUserId == user.idUser && (
                <div>
                    <p>{isPublicFeedback ? 'Público' : 'Privado'}</p>
                    <Switch
                        onChange={changeVisibleFeedbackReceveid}
                        checked={isPublicFeedback}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={20}
                    />
                </div>
            )}
        </FeedbackContent >
    )
}