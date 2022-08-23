import {Link} from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import logoImg from "../../images/logo.png"
import logoWhiteImg from "../../images/logo-white.png"
import LogoContent from "./styles"

export const Logo = ({width, isLogoWhite}) => {
  const {isLogged} = useAuthContext()

  return (
    <Link to={isLogged ? "/home" : "/"}>
      <LogoContent width={width} src={isLogoWhite ? logoWhiteImg : logoImg} alt="logo" />
    </Link>
  )
}