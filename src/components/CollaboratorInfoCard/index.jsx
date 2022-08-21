import { AvatarUser } from "../AvatarUser"
import { useNavigate } from "react-router-dom";
import { CardContent } from "./styles"
import uploadUserImg from "../../images/uploadUser.jpg"
import { Button } from "../Button/styles";
import { useThemeContext } from "../../hooks/useThemeContext";

export const CollaboratorInfoCard = ({ datasCollaborator, notIsNavigate, shadowNone }) => {
  const {colors, title} = useThemeContext()
  const navigate = useNavigate()

  const navigateFor = (event, navigation) => {
    event.preventDefault()

    if (notIsNavigate) {
      return
    }

    navigate(navigation)
  }

  return (
    <CardContent typeTheme={title} shadow={shadowNone}>
      <div>
        <AvatarUser width="60px" img={datasCollaborator.avatar ? datasCollaborator.avatar : uploadUserImg} />
        <div>
          <h4>{datasCollaborator.name}</h4>
          <p>{datasCollaborator.userRole}</p>
        </div>
      </div>
      <div>
        <Button 
          width="100px" 
          padding="5px" 
          radius="10px" 
          backgroundColor={colors.primary} 
          onClick={(event) => navigateFor(event, `/collaborator/profile/${datasCollaborator.idUser}`)
        }>Ver Perfil</Button>
        
        <Button 
          width="130px" 
          padding="5px 15px" 
          radius="10px" 
          onClick={(event) => navigateFor(event, `/feedback/create/${datasCollaborator.idUser}`)
        }>Enviar feedback</Button>
      </div>
     
    </CardContent>    
  )
}