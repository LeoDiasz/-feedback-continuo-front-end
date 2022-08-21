import { useThemeContext } from "../../hooks/useThemeContext"
import { UpdateAvatar } from "../UpdateAvatar"
import { AvatarUser } from "../AvatarUser"
import uploadUser from "../../images/uploadUser.jpg"
import { CardUser, DivInfoText, DivFeedbacksCount, Avatar } from "./styles"
import { Button } from "../Button/styles"
import { useUserContext } from "../../hooks/useUserContext"

export const UserInfoFeedbacksCountCard = ({ userPerfil, listFeedbacksSend, listFeedbacksReceveid }) => {
  const { user } = useUserContext()
  const { colors } = useThemeContext()

  return (
    <CardUser>
      {userPerfil && (
        <div>
          <Avatar>
            <AvatarUser img={userPerfil.avatar ? userPerfil.avatar : uploadUser} width="170px" />
            {user.idUser === userPerfil.idUser && <UpdateAvatar />}
          </Avatar>
          <DivInfoText>
            <h2 id="id-user-name">{userPerfil.name}</h2>
            <p > {userPerfil.userRole}</p>
            <small id="id-user-email">{userPerfil.email}</small>
          </DivInfoText>
          <DivFeedbacksCount>
            <Button backgroundColor={colors.primary}>
              <span>{listFeedbacksSend.length > 0 ? listFeedbacksSend.length : "0"}</span>
              Feedbacks Enviados
            </Button>
            <Button backgroundColor={colors.primary}>
              <span>{listFeedbacksReceveid.length > 0 ? listFeedbacksReceveid.length : "0"}</span>
              Feedbacks recebidos
            </Button>
          </DivFeedbacksCount>
        </div>
      )}
    </CardUser>
  )
}
