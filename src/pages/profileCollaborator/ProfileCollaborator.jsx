import {useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { useUserContext } from "../../hooks/useUserContext"
import { useFeedbackContext } from "../../hooks/useFeedbackContext"
import { Header } from "../../components/Header"
import { Loading } from '../../components/Loading'
import { UserInfoFeedbacksCountCard } from "../../components/UserInfoFeedbacksCountCard"
import { SectionContent } from "./styles"
import { Container } from "../../components/Container/styles"
import { SectionFeedbacksUser } from "../../components/SectionFeedbacksUser"

export const ProfileCollaborator = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const {getDatasCollaboratorById, collaborator} = useUserContext()
  const {getFeedbacksUser, listFeedbacksReceveid, listFeedbacksSend} = useFeedbackContext()

  const setup = async () => {
    await getDatasCollaboratorById(id)
    await getFeedbacksUser("receveid", id, true)
    await getFeedbacksUser("gived", id)
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
    <Header/>
    <SectionContent>
      <Container>
        <UserInfoFeedbacksCountCard
          user={collaborator}
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
