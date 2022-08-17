import { AvatarUserStyles } from "./styles"
import uploadUserImg from "../../images/uploadUser.jpg"

export const AvatarUser = ({img, width}) => {

  return (
      <AvatarUserStyles src={img ? img : uploadUserImg} width={width} alt="Avatar user"/>
  )

}