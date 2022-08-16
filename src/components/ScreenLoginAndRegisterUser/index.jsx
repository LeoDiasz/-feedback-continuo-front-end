import {Link} from "react-router-dom"
import bannerChat from "../../images/banner-chat.png"
import { Logo } from "../Logo"
import { DivContainer, SectionBanner, SectionForm } from "./styles"

export const ScreenAndRegisterUser = ({children, titleForm, isScreenLogin}) => {

  return (
    <DivContainer>
      <SectionBanner>
        <div>
          <h1>DBC Feedback</h1>
          <p>Realize feedback entre os colaboradores da DBC</p>
        </div>
  
        <img src={bannerChat} alt="banner chat" />
       
      </SectionBanner>
      <SectionForm>
        <div>
          <Logo/>
          {titleForm && <h1>{titleForm}</h1>}
          {children}
          {isScreenLogin ? (
            <Link to="user/create">Não possui conta? <span>Criar</span></Link>
          ) : (
            <Link to="/">Já possui conta? <span>Login</span></Link>
          )}
        </div>
      </SectionForm>
    </DivContainer>
    
  )
}