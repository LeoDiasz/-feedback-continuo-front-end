import { useState } from 'react'
import Switch from 'react-switch'
import {useUserContext} from "../../hooks/useUserContext"
import { apiDbc } from '../../services/api'
import { TagsList } from '../TagsList'
import { AvatarUser } from "../../components/AvatarUser"
import { formatDateExtended } from '../../utils/formatDatas'
import { FeedbackContent, DivDatasUser, DivMessageFeedback, DivMoreInfos } from './styles'


export const FeedbackUserCard = ({ feedbackDatas, type }) => {
    const {user} = useUserContext()

    const [isPublicFeedback, setIsPublicFeedback] = useState(() => {  
        return feedbackDatas.publico ? true : false
    })

    const changeVisibleFeedbackReceveid = async () => {

        setIsPublicFeedback(isPublicFeedback ? false : true)

        let updateVisible = isPublicFeedback ? false : true

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
                    <div>
                        <AvatarUser img={feedbackDatas.feedbacksGiven.avatar} width="75px" />
                        <h4>{feedbackDatas.feedbacksGiven.name}</h4>
                        <p>{feedbackDatas.feedbacksGiven.userRole}</p>
                    </div>
                ) : (
                    <div>
                        <AvatarUser img={feedbackDatas.feedbackEntityReceived.avatar} width="75px" />
                        <h4>{feedbackDatas.feedbackEntityReceived.name}</h4>
                        <p>{feedbackDatas.feedbackEntityReceived.userRole}</p>
                    </div>
                )}
            </DivDatasUser>
            <DivMessageFeedback>
                <p>{feedbackDatas.message}</p>
                <TagsList 
                    listTags={feedbackDatas.tagsList} 
                    isNotShowDelete 
                />
            </DivMessageFeedback>
            {type === "feedbacksGiven" && feedbackDatas.feedbackUserId == user.idUser ? (
                <DivMoreInfos chooseColor={isPublicFeedback}>
                    <span>{isPublicFeedback ? 'Público' : 'Privado'}</span>
                    <Switch
                        onChange={changeVisibleFeedbackReceveid}
                        checked={isPublicFeedback}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={20}
                    />
                </DivMoreInfos>
            ) : (
                <DivMoreInfos chooseColor={feedbackDatas.anonymous}>
                    <span>{feedbackDatas.anonymous ? "Anonimo" : "Não anonimo"}</span>
                </DivMoreInfos>
            )}
             <small>Criado em: {formatDateExtended(feedbackDatas.dataEHora)}</small>
        </FeedbackContent >
    )
}