import { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { MdExpandMore } from 'react-icons/md'
import { useUserContext } from "../../hooks/useUserContext"
import { useThemeContext } from '../../hooks/useThemeContext'
import { apiDbc } from '../../services/api'
import { TagsList } from '../TagsList'
import { AvatarUser } from "../../components/AvatarUser"
import { formatDateExtended } from '../../utils/formatDatas'
import { FeedbackContent, DivDatasUser, DivMessageFeedback, DivMoreInfos } from './styles'

export const FeedbackUserCard = ({ feedbackDatas, type }) => {
    const { user } = useUserContext()
    const { colors } = useThemeContext()
    const [showAllMessage, setShowAllMessage] = useState(false)

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

    useEffect(() => {
        return () => setShowAllMessage(false)
    }, [])

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
            <DivMessageFeedback isShowAllMessage={showAllMessage}>
                <div>
                    {feedbackDatas.message.length > 30 ? (
                        <>
                            <p onClick={() => setShowAllMessage(showAllMessage ? false : true)}>{feedbackDatas.message}</p>
                            {showAllMessage &&
                                <span onClick={() => setShowAllMessage(showAllMessage ? false : true)}>Ver mais <MdExpandMore /></span>
                            }
                        </>
                    ) : (
                        <>
                            <p>{feedbackDatas.message}</p>
                        </>
                    )}
                </div>
                <TagsList
                    listTags={feedbackDatas.tagsList}
                    isNotShowDelete
                />
            </DivMessageFeedback>
            {type === "feedbacksGiven" && feedbackDatas.feedbackUserId == user.idUser ? (
                <DivMoreInfos chooseColor={isPublicFeedback}>
                    <div>
                        <span>{isPublicFeedback ? 'Público' : 'Privado'}</span>
                        <Switch
                            onChange={changeVisibleFeedbackReceveid}
                            checked={isPublicFeedback}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={35}
                            handleDiameter={20}
                            offHandleColor={colors.textGray}
                            onHandleColor={colors.inputBorder}
                            onColor={colors.secondary}
                        />
                    </div>

                </DivMoreInfos>
            ) : (
                <DivMoreInfos type="anonymous">
                    {user.idUser == feedbackDatas.userId && feedbackDatas.anonymous && <span>anônimo</span>}
                </DivMoreInfos>
            )}
            <small>Criado em: {formatDateExtended(feedbackDatas.dataEHora)}</small>
        </FeedbackContent >
    )
}