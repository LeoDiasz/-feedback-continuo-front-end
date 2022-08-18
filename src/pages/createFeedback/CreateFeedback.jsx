import { Formik } from 'formik'
import { Container } from '../../components/Container/styles'
import { Forms } from './styles'
import { Label, InputField } from '../../components/InputStyles/styles'
import { useEffect } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button/styles'

export const CreateFeedback = () => {

  const { user, listCollaborators, getListCollaborators } = useUserContext()
  const { handleCreateFeedback, onChangeHandler, onSuggestionHandler, suggestions, text } = useFeedbackContext()

  const setup = async () => {
    await getListCollaborators()
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
              anonymous: '',
              feedbackIdUser: parseInt(values.feedbackIdUser),
              tagsList: [values.tags],
            }
            handleCreateFeedback(newValues)
            console.log(newValues)
          }}
        >
          {({ errors }) => (
            <Forms>
              <div>
                <Label htmlFor="userFeedbackSend">Para quem gostaria de enviar?</Label>
                <InputField
                  type="text"
                  onChange={e => onChangeHandler(e.target.value)}
                  value={text}
                />
                {suggestions && suggestions.map(({ name, idUser }) =>
                  <div key={idUser} onClick={() => onSuggestionHandler(name)}>{name}</div>
                )}
              </div>
              <div>
                <Label htmlFor="message">Feedback</Label>
                <InputField type="text" name="message" id="message" placeholder='Digite o feedback que gostaria de enviar' />
              </div>
              <div>
                <Label htmlFor="tags">Tags</Label>
                <InputField
                  type="text"
                  onChange={e => onChangeHandler(e.target.value)}
                  value={text}
                />
              </div>
              <Button type='submit'>Criar</Button>
            </Forms>
          )
          }
        </Formik>
      </Container>
    </>


  )
}