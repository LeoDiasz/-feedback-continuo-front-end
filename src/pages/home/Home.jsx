import React, { useState } from 'react'
import { Container, Grid, DivUsuarios, DivFeedback, Abas, FeedBackRecebidoContent, FeedBackEnviadoContent } from './styles'
import uploadUser from "../../images/uploadUser.jpg"

export const Home = () => {

  const [displayEnviado, setDisplayEnviado] = useState('grid');
  const [displayRecebido, setDisplayRecebido] = useState('none');
  const [heigth, setHeigth] = useState('')


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

  return (
    <Container>
      <Grid>
        <DivUsuarios> {/* Grid de Usuarios */}
          <img src={uploadUser} alt="" />
          <h1>Nome do usuário</h1>
          <p>Cargo</p>
          <p>Email</p>
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
  )
}
