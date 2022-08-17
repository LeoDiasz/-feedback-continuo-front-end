import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import uploadUser from "../../images/uploadUser.jpg"
import { Loading } from '../../components/Loading'
import { Grid, DivUsuarios, DivFeedback, Abas, FeedBackRecebidoContent, FeedBackEnviadoContent } from './styles'
import { Container } from '../../components/Container/styles'
import { Header } from '../../components/Header'
import { AvatarUser } from '../../components/AvatarUser'

export const Home = () => {
  const {user, getDatasUser} = useUserContext()
  const [loading, setLoading] = useState(true)
  const [displayEnviado, setDisplayEnviado] = useState('grid');
  const [displayRecebido, setDisplayRecebido] = useState('none');
  const [heigth, setHeigth] = useState('')
 
  const setup = async () => {
    setLoading(true)
    await getDatasUser()

    setLoading(false)
  }

  const mudarAbaRecebido = () => {
    setDisplayEnviado('none')
    setDisplayRecebido('grid')
    setHeigth('red')
    console.log(heigth)
  }

  const mudarAbaEnviado = () => {
    setDisplayRecebido('none')
    setDisplayEnviado('grid')
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
              <AvatarUser img={user.avatar ? user.avatar : uploadUser}/>
        
              <h1>{user.name}</h1>
              <p>{user.userRole}</p>
              <p>{user.email}</p>
              <div><span>5</span><p>Feedback enviados</p></div>
              <div><span>3</span><p>Feedback recebidos</p></div>
            </DivUsuarios>
          
            <DivFeedback> {/* Grid de Feedbakcs */}
              <Abas>
                <p onClick={mudarAbaEnviado}>Feedback Enviados</p>
                <p onClick={mudarAbaRecebido}>Feedback Recebidos</p>
              </Abas>

              <FeedBackRecebidoContent displayRecebido={displayRecebido} heigth={heigth}>
                <div>
                  <img src={uploadUser} alt="" />
                  <h1>Lucas Araujo</h1>
                  <p>Cargo</p>
                  <p>Email</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, harum optio! Reprehenderit dignissimos rerum delectus quae provident in placeat veniam maxime consequatur asperiores impedit, unde nihil vel obcaecati aspernatur! Optio consequatur illum qui asperiores? Itaque explicabo, consectetur ad, cum quidem laudantium temporibus eveniet ex expedita dicta ab perspiciatis magni enim!</p>
                </div>
              </FeedBackRecebidoContent>

              <FeedBackEnviadoContent displayEnviado={displayEnviado}>
                <div>
                  <img src={uploadUser} alt="" />
                  <h1>Leonardo Dias</h1>
                  <p>Cargo</p>
                  <p>Email</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, harum optio! Reprehenderit dignissimos rerum delectus quae provident in placeat veniam maxime consequatur asperiores impedit, unde nihil vel obcaecati aspernatur! Optio consequatur illum qui asperiores? Itaque explicabo, consectetur ad, cum quidem laudantium temporibus eveniet ex expedita dicta ab perspiciatis magni enim!</p>
                </div>
              </FeedBackEnviadoContent>

            </DivFeedback>
          </Grid>
        </Container >
      </main>
    </>
   
  )
}
