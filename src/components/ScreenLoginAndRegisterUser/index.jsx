import {Link} from "react-router-dom"
import {useThemeContext} from "../../hooks/useThemeContext"
import { Logo } from "../Logo"
import bannerChat from "../../images/banner-chat.png"
import { DivContainer, SectionBanner, SectionForm } from "./styles"

const ScreenLoginAndRegisterUser = ({children, titleForm, isScreenLogin}) => {
  const {title} = useThemeContext()

  return (
    <DivContainer>
      <SectionBanner typeTheme={title}>
        <div>
          <h1>Feedbacks DBC</h1>
          <p>Realize feedback entre seus colegas</p>
        </div>
        <img src={bannerChat} alt="banner chat" />
      </SectionBanner>
      <SectionForm typeTheme={title}>
        <div>
          <Logo isDisabledText width="140px" />
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

export default ScreenLoginAndRegisterUser