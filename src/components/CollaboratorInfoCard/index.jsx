import { AvatarUser } from "../AvatarUser"
import { useNavigate } from "react-router-dom";
import { CardContent } from "./styles"
import uploadUserImg from "../../images/uploadUser.jpg"
import { Button } from "../Button/styles";

export const CollaboratorInfoCard = ({ datasCollaborator, notIsNavigate, shadowNone }) => {
  const navigate = useNavigate()

  const navigateForPerfil = () => {
    console.log("teste")
    if (notIsNavigate) {
      return
    }

    navigate(`/collaborator/profile/${datasCollaborator.idUser}`)
  }

  return (
    <CardContent onClick={() => navigateForPerfil()} shadow={shadowNone}>
        <AvatarUser width="60px" img={datasCollaborator.avatar ? datasCollaborator.avatar : uploadUserImg} />
        <div>
          <h4>{datasCollaborator.name}</h4>
          <p>{datasCollaborator.userRole}</p>
        </div>
      </CardContent>    
  )
}