import { useThemeContext } from "../../hooks/useThemeContext"
import { useUserContext } from "../../hooks/useUserContext"
import { UpdateAvatar } from "../UpdateAvatar"
import { AvatarUser } from "../AvatarUser"
import uploadUser from "../../images/uploadUser.jpg"
import { Button } from "../Button/styles"
import { CardUser, DivInfoText, DivFeedbacksCounter, DivAvatarWithUpload } from "./styles"

export const UserInfoWithCounterFeedbacks = ({ userPerfil, listFeedbacksSend, listFeedbacksReceveid }) => {
  const { user } = useUserContext()
  const { colors } = useThemeContext()

  return (
    <CardUser>
      {userPerfil && (
        <div>
          <DivAvatarWithUpload>
            <AvatarUser img={userPerfil.avatar ? userPerfil.avatar : uploadUser} width="170px" />
            {user.idUser === userPerfil.idUser && <UpdateAvatar />}
          </DivAvatarWithUpload>
          <DivInfoText>
            <h2 id="id-user-name">{userPerfil.name}</h2>
            <p> {userPerfil.userRole}</p>
            <small id="id-user-email">{userPerfil.email}</small>
          </DivInfoText>
          <DivFeedbacksCounter>
            <Button backgroundColor={colors.primary}>
              <span>{listFeedbacksSend.length > 0 ? listFeedbacksSend.length : "0"}</span>
              Feedbacks Enviados
            </Button>
            <Button backgroundColor={colors.primary}>
              <span>{listFeedbacksReceveid.length > 0 ? listFeedbacksReceveid.length : "0"}</span>
              Feedbacks Recebidos
            </Button>
          </DivFeedbacksCounter>
        </div>
      )}
    </CardUser>
  )
}
