import { useThemeContext } from "../../hooks/useThemeContext"
import { AvatarUser } from "../AvatarUser"
import uploadUser from "../../images/uploadUser.jpg"
import { CardUser, DivInfoText, DivFeedbacksCount } from "./styles"
import { Button } from "../Button/styles"

export const UserInfoFeedbacksCountCard = ({user, listFeedbacksSend, listFeedbacksReceveid}) => {
  const {colors} = useThemeContext()
  console.log(listFeedbacksReceveid)
  return (
    <CardUser>
       {user && (
          <>
            <AvatarUser img={user.avatar ? user.avatar : uploadUser} width="170px"/>
            <DivInfoText>
              <h2 id="id-user-name">{user.name}</h2>
              <p > {user.userRole}</p>
              <small id="id-user-email">{user.email}</small>
            </DivInfoText>
            <DivFeedbacksCount>
              <Button backgroundColor={colors.blue}>
                <span>{listFeedbacksSend.length > 0 ? listFeedbacksSend.length : "0"}</span>
                Feedbacks Enviados
              </Button>
              <Button backgroundColor={colors.blue}>
                <span>{listFeedbacksReceveid.length > 0 ? listFeedbacksReceveid.length : "0"}</span>
                Feedbacks recebidos
              </Button>
            </DivFeedbacksCount>
          </>
        )}
    </CardUser>
  )
}
