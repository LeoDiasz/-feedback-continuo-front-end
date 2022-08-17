import { Formik } from 'formik'
import { Container } from '../../components/Container/styles'
import { Forms } from './styles'
import { Label, InputField } from '../../components/InputStyles/styles'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Header } from '../../components/Header'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '../../components/Button/styles'


export const CreateFeedback = () => {

  const { user, listCollaborators, getListCollaborators } = useUserContext()

  const { handleCreateFeedback } = useFeedbackContext()

  const [anonimo, setAnonimo] = useState(false)
  console.log(anonimo)
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
            feedbackIdUser:'',
            tagsList: '',
          }}
          onSubmit={values => {
            const newValues = {
              message: values.message,
              anonymous: anonimo,
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
                <Label htmlFor="feedbackIdUser">Para quem gostaria de enviar?</Label>
                <InputField name="feedbackIdUser" id="feedbackIdUser" component="select">
                  {listCollaborators && listCollaborators.map(({ name, userRole, idUser }) => (
                    <option key={idUser} value={idUser}>{name} - {userRole}</option>
                  ))}
                </InputField>
              </div>
              <div>
                <Label htmlFor="message">Feedback</Label>
                <InputField type="text" name="message" id="message" placeholder='Digite o feedback que gostaria de enviar' />
              </div>
              <div>
                <Label htmlFor="tags">Tags</Label>
                <InputField name="tags" id="tags" type="text">

                </InputField>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} onChange={() => setAnonimo(true)} label="Enviar feedbak anônimo?" />
                </FormGroup>
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