import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Loading } from '../../components/Loading'
import { UserInfoWithCounterFeedbacks } from '../../components/UserInfoWithCounterFeedbacks'
import { SectionFeedbacksUser } from '../../components/SectionFeedbacksUser'
import { Container } from '../../components/Container/styles'
import { MainContent} from './styles'
import { Footer } from '../../components/Footer'

export const Home = () => {
  const {user, getDatasUser, updateAvatar} = useUserContext()
  const {getFeedbacksUser,  listFeedbacksReceveid, listFeedbacksSend} = useFeedbackContext()
  const [isLoading, setIsLoading] = useState(true)  
  
  const setup = async () => {
    setIsLoading(true)
    const {id} = await getDatasUser()
    if(id) {
      await getFeedbacksUser("receveid", id)
      await getFeedbacksUser("gived", id)
    }
  
    setIsLoading(false)
  }

  useEffect(() => {
    setup()    
  }, [updateAvatar])

  if(isLoading) {
    return (
      <Loading/>
    )
  } 

  return (
    <>
      <MainContent>
        <Container>
          <UserInfoWithCounterFeedbacks 
            userPerfil={user}
            listFeedbacksReceveid={listFeedbacksReceveid} 
            listFeedbacksSend={listFeedbacksSend}
          />          
          <SectionFeedbacksUser 
            listFeedbacksReceveid={listFeedbacksReceveid} 
            listFeedbacksSend={listFeedbacksSend}
          /> 
        </Container >
      </MainContent>
      <Footer/>
    </>
  )
}

