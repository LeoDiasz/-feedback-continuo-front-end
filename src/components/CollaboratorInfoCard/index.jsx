import { AvatarUser } from "../AvatarUser"
import {useNavigate} from "react-router-dom";
import { CardContent } from "./styles"
import uploadUserImg from "../../images/uploadUser.jpg"

export const CollaboratorInfoCard = ({datasCollaborator}) => {
  const navigate = useNavigate()

  return (
    <CardContent onClick={() => navigate(`/collaborator/profile/${datasCollaborator.idUser}`)}>
      <AvatarUser width="60px" img={datasCollaborator.avatar ? datasCollaborator.avatar : uploadUserImg}/>
      <div>
        <h4>{datasCollaborator.name}</h4>
        <p>{datasCollaborator.userRole}</p>
      </div>
    </CardContent>
  )
}