import {Link} from "react-router-dom"
import logoImg from "../../images/logo.png"
import LogoContent from "./styles"

export const Logo = () => {

  return (
    <Link to="/">
      <LogoContent src={logoImg} alt="logo" />
    </Link>
  )
}