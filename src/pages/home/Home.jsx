import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Loading } from '../../components/Loading'
import { MainContent} from './styles'
import { Container } from '../../components/Container/styles'
import { Header } from '../../components/Header'
import { UserInfoFeedbacksCountCard } from '../../components/UserInfoFeedbacksCountCard'
import { SectionFeedbacksUser } from '../../components/SectionFeedbacksUser'

export const Home = () => {
  const {user, getDatasUser} = useUserContext()
  const { getFeedbacksUser,  listFeedbacksReceveid, listFeedbacksSend} = useFeedbackContext()
  const [loading, setLoading] = useState(true)  
  
  const setup = async () => {
    const {id} = await getDatasUser()
    await getFeedbacksUser("receveid", id)
    await getFeedbacksUser("gived", id)
    
    setLoading(false)
  }

  useEffect(() => {
    setup()    
  }, [])

  if(loading) {
    return (
      <Loading/>
    )
  } 
  console.log(listFeedbacksReceveid)
  
  return (
    <>
      <Header/>
      <MainContent>
        <Container>
          <UserInfoFeedbacksCountCard
            user={user}
            listFeedbacksReceveid={listFeedbacksReceveid} 
            listFeedbacksSend={listFeedbacksSend}
          />          
          <SectionFeedbacksUser listFeedbacksReceveid={listFeedbacksReceveid} listFeedbacksSend={listFeedbacksSend}/> 
        </Container >
      </MainContent>
    </>
   
  )
}

