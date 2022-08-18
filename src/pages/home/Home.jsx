import { useEffect, useState } from 'react'
import uploadUser from "../../images/uploadUser.jpg"
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Loading } from '../../components/Loading'
import { Grid, DivUsuarios, DivFeedback, Abas } from './styles'
import { Container } from '../../components/Container/styles'
import { Header } from '../../components/Header'
import { AvatarUser } from '../../components/AvatarUser'
import { FeedbackUserCard } from '../../components/FeedbackUserCard'

export const Home = () => {
  const {user, getDatasUser} = useUserContext()
  const { getFeedbackUser, listFeedbackReceived} = useFeedbackContext()
  const [loading, setLoading] = useState(true)
  console.log(listFeedbackReceived)

  const setup = async () => {

    setLoading(true)

    await getDatasUser()
    await getFeedbackUser('receveid')
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

  return (
    <>
      <Header/>
      <main>
        <Container>
          <Grid>
            <DivUsuarios> {/* Grid de Usuarios */}
              {user && (
                <>
                  <AvatarUser img={user.avatar ? user.avatar : uploadUser}/>
            
                  <h1>{user.name}</h1>
                  <p>{user.userRole}</p>
                  <p>{user.email}</p>
                </>
              )}
              <div><span>5</span><p>Feedback enviados</p></div>
              <div><span>3</span><p>Feedback recebidos</p></div>
            </DivUsuarios>
          
            <DivFeedback> {/* Grid de Feedbakcs */}
            
              <Abas>
                <p >Feedback Enviados</p>
                <p >Feedback Recebidos</p>
              </Abas>

             <FeedbackUserCard />
             
            </DivFeedback>
          </Grid>
        </Container >
      </main>
    </>
   
  )
}
