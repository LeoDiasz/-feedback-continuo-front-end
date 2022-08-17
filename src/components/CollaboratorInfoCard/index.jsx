import { AvatarUser } from "../AvatarUser"
import { CardContent } from "./styles"
import uploadUserImg from "../../images/uploadUser.jpg"

export const CollaboratorInfoCard = ({datasCollaborator}) => {

  // avatar: null
  // idUser: 15
  // name: "Dr. Raven Wiza"
  // userRole: "Engenheiro de Dados"


  console.log(datasCollaborator)
  return (
    <CardContent>
      <AvatarUser img={datasCollaborator.avatar ? datasCollaborator.avatar : uploadUserImg}/>
      <div>
        <h3></h3>
      </div>
    </CardContent>
  )
}