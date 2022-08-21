import { useState } from "react"
import { Link } from "react-router-dom"
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useUserContext } from "../../hooks/useUserContext"
import { useThemeContext } from "../../hooks/useThemeContext"
import { Logo } from "../Logo"
import { AvatarUser } from "../AvatarUser"
import uploadUser from "../../images/uploadUser.jpg"
import { Container } from "../Container/styles"
import { Button } from "../Button/styles"
import { HeaderContainer, DivLogout, SwitchStyle} from "./styles"

export const Header = ({handleToggleTheme, theme}) => {
  const [isOpenButtonSignOut, setIsOpenButtonSignOut] = useState(false)
  const {colors} = useThemeContext()
  const {user} = useUserContext()
  const {signOut} = useAuthContext()
  
  return (
    <HeaderContainer themeDark={theme}>
      <Container>
        <nav>
          <Logo width="120px" isLogoWhite={theme.title == "light"}/>
          <ul>
            <li>
              <Link to="/collaborators">Colaboradores</Link>
            </li>
            <li>
              <Link to="/feedback/create">Enviar feedback</Link>
            </li>
          </ul>
        </nav>
        
        <div>
          <SwitchStyle
            onChange={handleToggleTheme}
            checked={theme.title == "light"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={18}
            width={40}
            checkedHandleIcon={<BsFillSunFill size={10} /> }
            uncheckedHandleIcon={<BsFillMoonFill size={10}/>}
            handleDiameter={20}
            
            offHandleColor={colors.textGray}
            onHandleColor={colors.inputBorder}
            onColor={colors.textGray}
          />
          <DivLogout>
            {isOpenButtonSignOut && (
              <Button  width="70px" padding="3px" id="id-button-signout" onClick={signOut}>Sair</Button>
            )}
            <button onClick={() => setIsOpenButtonSignOut(isOpenButtonSignOut ? false : true)}>
              {user &&  ( 
                <>
                  <AvatarUser img={user.avatar ? user.avatar : uploadUser} width="60px" id="id-avatar-top-right"/>
                  <MdOutlineArrowDropDown/>
                </>
              )}
            </button>
          </DivLogout>
        </div>
       
      </Container>
    </HeaderContainer>
  )
}