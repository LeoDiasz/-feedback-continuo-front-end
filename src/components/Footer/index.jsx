import { Logo } from "../Logo"
import { FooterContent } from "./styles"
import {useThemeContext} from "../../hooks/useThemeContext"

export const Footer = ({id}) => {
  const {title} = useThemeContext()

  return (
    <FooterContent id={id} typeTheme={title}>
      <Logo/>
    </FooterContent>
  )
}
