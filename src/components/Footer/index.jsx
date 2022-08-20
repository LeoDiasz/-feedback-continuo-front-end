import { Logo } from "../Logo"
import { FooterContent } from "./styles"


export const Footer = ({id}) => {
  return (
    <FooterContent id={id}>
      <Logo/>
    </FooterContent>
  )
}
