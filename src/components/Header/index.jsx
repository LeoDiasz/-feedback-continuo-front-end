import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useUserContext } from "../../hooks/useUserContext"
import { Logo } from "../Logo"
import { AvatarUser } from "../AvatarUser"
import { Container } from "../Container/styles"
import { HeaderContainer, DivLogout} from "./styles"
import { Button } from "../Button/styles"

export const Header = () => {
  const [isOpenButtonSignOut, setIsOpenButtonSignOut] = useState(false)
  const {user} = useUserContext()
  const {signOut} = useAuthContext()
  
  return (
    <HeaderContainer>
      <Container>
        <nav>
          <Logo/>
          
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
            <Button  width="100px" onClick={signOut}>Sair</Button>
          )}
          <button onClick={() => setIsOpenButtonSignOut(isOpenButtonSignOut ? false : true)}>
            <AvatarUser img={user.avatar} width="60px"/>
          </button>

        </DivLogout>


      </Container>
    </HeaderContainer>
  )
}