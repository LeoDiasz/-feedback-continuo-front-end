import {Link} from "react-router-dom"
import bannerChat from "../../images/banner-chat.png"
import { Logo } from "../Logo"
import { DivContainer, SectionBanner, SectionForm } from "./styles"

export const ScreenAndRegisterUser = ({children, titleForm, isScreenLogin}) => {

  return (
    <DivContainer>
      <SectionBanner>
        <div>
          <h1>DBC Feedbacks</h1>
          <p>Realize feedback entre seus colegas</p>
        </div>
        <img src={bannerChat} alt="banner chat" />


       
      </SectionBanner>
      <SectionForm>
        <div>
          <Logo isDisabledText/>
          {titleForm && <h1>{titleForm}</h1>}
          {children}
          {isScreenLogin ? (
            <Link id="id-navigate-for-create" to="user/create">Não possui conta? <span>Criar</span></Link>
          ) : (
            <Link id="id-navigate-for-login" to="/">Já possui conta? <span>Login</span></Link>
          )}
        </div>
      </SectionForm>
    </DivContainer>
    
  )
}