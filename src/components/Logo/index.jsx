import {Link} from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import logoImg from "../../images/logo.png"
import LogoContent from "./styles"

export const Logo = () => {
  const {isLogged} = useAuthContext()
  return (
    <Link to={isLogged ? "/home" : "/"}>
      <LogoContent src={logoImg} alt="logo" />
    </Link>
  )
}