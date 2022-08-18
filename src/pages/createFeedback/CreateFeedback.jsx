import { Formik } from 'formik'
import { Container } from '../../components/Container/styles'
import { Forms, InputAuto } from './styles'
import { Label, InputField } from '../../components/InputStyles/styles'
import { useEffect } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button/styles'
import { AvatarUser } from '../../components/AvatarUser'
import uploadUser from "../../images/uploadUser.jpg"


export const CreateFeedback = () => {
  const { getListCollaborators, user } = useUserContext()

  const {
    getTagsServer,
    getFeedbacksUser,
    handleCreateFeedback,
    onChangeFeedbackHandler,
    onSuggestionFeedbackHandler,
    feedbackSuggestions,
    feedback,
    idUserReceiveFeed,
    onSuggestionTagsHandler,
    onChangeTagsHandler,
    tags,
    tagsSuggestions,
  } = useFeedbackContext()

  const setup = async () => {
    await getListCollaborators()
    await getTagsServer()
    await getFeedbacksUser("receveid", user.idUser)
    await getFeedbacksUser("gived", user.idUser)
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Formik
          initialValues={{
            message: '',
            anonymous: '',
            feedbackIdUser: '',
            tagsList: '',
          }}
          onSubmit={values => {
            const newValues = {
              message: values.message,
              anonymous: false,
              feedbackIdUser: parseInt(idUserReceiveFeed),
              tagsList: [],
            }
            console.log(newValues)
            // handleCreateFeedback(newValues)
          }}
        >
          {({ errors }) => (
            <Forms>
              <div>
                <Label htmlFor="userFeedbackSend">Para quem gostaria de enviar?</Label>
                <InputAuto
                  type="text"
                  name="userFeedbackSend"
                  id="userFeedbackSend"
                  onChange={e => onChangeFeedbackHandler(e.target.value)}
                  value={feedback}
                />
              </div>
              <nav>
                <ul>
                  {feedbackSuggestions && feedbackSuggestions.map(({ idUser, name, avatar, userRole }) =>
                    <li key={idUser} onClick={() => onSuggestionFeedbackHandler(name, idUser)}>
                      <AvatarUser img={avatar ? avatar : uploadUser} />
                      <p>{name}</p>
                      <p>{userRole}</p>
                    </li>
                  )}
                </ul>
              </nav>

              <div>
                <Label htmlFor="message">Feedback</Label>
                <InputField type="text" name="message" id="message" placeholder='Digite o feedback que gostaria de enviar' />
              </div>
              <div>
                <Label htmlFor="tags">Tags</Label>
                <InputAuto
                  type="text"
                  name="tags"
                  id="tags"
                  onChange={e => onChangeTagsHandler(e.target.value)}
                  value={tags}
                />
                <div>
                  {tags && tags.map(tag => (
                    <p>tag</p>
                  ))}
                </div>
                <nav>
                  <ul>
                    {tagsSuggestions && tagsSuggestions.map(({ idTag, name }) =>
                      <li key={idTag} onClick={() => onSuggestionTagsHandler(name)}>
                        <p>{name}</p>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              <Button type='submit'>Criar</Button>
            </Forms>
          )}
        </Formik>
      </Container>
    </>


  )
}