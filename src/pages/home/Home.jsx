import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Loading } from '../../components/Loading'
import { Header } from '../../components/Header'
import { UserInfoFeedbacksCountCard } from '../../components/UserInfoFeedbacksCountCard'
import { SectionFeedbacksUser } from '../../components/SectionFeedbacksUser'
import { Container } from '../../components/Container/styles'
import { MainContent} from './styles'
import { Footer } from '../../components/Footer'

export const Home = () => {
  const {user, getDatasUser} = useUserContext()
  const {getFeedbacksUser,  listFeedbacksReceveid, listFeedbacksSend} = useFeedbackContext()
  const [isLoading, setIsLoading] = useState(true)  
  
  const setup = async () => {
    const {id} = await getDatasUser()
    if(id) {
      await getFeedbacksUser("receveid", id)
      await getFeedbacksUser("gived", id)
    }
  
    setIsLoading(false)
  }

  useEffect(() => {
    setup()    
  }, [])

  if(isLoading) {
    return (
      <Loading/>
    )
  } 

  return (
    <>
      <MainContent>
        <Container>
          <UserInfoFeedbacksCountCard
            user={user}
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

