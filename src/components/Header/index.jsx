import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useUserContext } from "../../hooks/useUserContext"
import { Logo } from "../Logo"
import { AvatarUser } from "../AvatarUser"
import uploadUser from "../../images/uploadUser.jpg"
import { Container } from "../Container/styles"
import { Button } from "../Button/styles"
import { HeaderContainer, DivLogout} from "./styles"

export const Header = () => {
  const [isOpenButtonSignOut, setIsOpenButtonSignOut] = useState(false)
  const {user} = useUserContext()
  const {signOut} = useAuthContext()
  
  return (
    <HeaderContainer>
      <Container>
        <nav>
          <Logo width="120px" isLogoWhite/>
          <ul>
            <li>
              <Link to="/collaborators">Colaboradores</Link>
            </li>
            <li>
              <Link to="/feedback/create">Enviar feedback</Link>
            </li>
          </ul>
        </nav>
        
        <DivLogout>
          {isOpenButtonSignOut && (
            <Button  width="100px" id="id-button-signout" onClick={signOut}>Sair</Button>
          )}
          <button onClick={() => setIsOpenButtonSignOut(isOpenButtonSignOut ? false : true)}>
            {user && <AvatarUser img={user.avatar ? user.avatar : uploadUser} width="60px" id="id-avatar-top-right"/>}
          </button>

        </DivLogout>
      </Container>
    </HeaderContainer>
  )
}