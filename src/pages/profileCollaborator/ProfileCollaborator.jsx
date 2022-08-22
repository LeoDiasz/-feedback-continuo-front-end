import {useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { useUserContext } from "../../hooks/useUserContext"
import { useFeedbackContext } from "../../hooks/useFeedbackContext"
import { SectionFeedbacksUser } from "../../components/SectionFeedbacksUser"
import { UserInfoWithCounterFeedbacks } from '../../components/UserInfoWithCounterFeedbacks'
import { Loading } from '../../components/Loading'
import { Container } from "../../components/Container/styles"
import { SectionContent } from "./styles"

export const ProfileCollaborator = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const {getDatasCollaboratorById, collaborator} = useUserContext()
  const {getFeedbacksUser, listFeedbacksReceveid, listFeedbacksSend} = useFeedbackContext()

  const setup = async () => {
    setIsLoading(true)
    await getDatasCollaboratorById(id)
    await getFeedbacksUser("receveid", id, true)
    await getFeedbacksUser("gived", id, false, true)
    setIsLoading(false)
  }

  useEffect(() => {
    setup()
  }, [])

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <>
    <SectionContent>
      <Container>
        <UserInfoWithCounterFeedbacks
          userPerfil={collaborator}
          listFeedbacksReceveid={listFeedbacksReceveid} 
          listFeedbacksSend={listFeedbacksSend}
        /> 
        <SectionFeedbacksUser 
          listFeedbacksReceveid={listFeedbacksReceveid}
          listFeedbacksSend={listFeedbacksSend}
        />
      </Container >
    </SectionContent>
  </>
  )
}
