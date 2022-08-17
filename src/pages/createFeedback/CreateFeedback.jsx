import { Formik } from 'formik'
import { Container } from '../../components/Container/styles'
import { Forms } from './styles'
import { Label, InputField } from '../../components/InputStyles/styles'
import { useEffect } from 'react'
import {useUserContext} from '../../hooks/useUserContext'
import { Header } from '../../components/Header'


export const CreateFeedback = () => {

  const { listCollaborators, getListCollaborators } = useUserContext()
  console.log(listCollaborators)

  const setup = async () => {    
    await getListCollaborators()   
  }

  useEffect(()=>{
    setup()
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Formik
        initialValues={{
          message: '',
          anonymous: '',
          feedbackIdUser: '',
          tagsList: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
        >
          {({errors}) =>(
            <Forms>
              <div>
                <Label htmlFor="userRecebe">Para quem gostaria de enviar?</Label>  
                <InputField name="userRecebe" id="userRecebe" component="select">   
                {listCollaborators && listCollaborators.map(({ name, userRole, i  }) => (
                  <option key={i}>{name} - {userRole}</option>
                ))}          
                </InputField>
              </div>           
              <div>
                <Label htmlFor="message">Feedback</Label>  
                <InputField type="text" name="message" id="message" placeholder='Digite o feedback que gostaria de enviar'/>
              </div>           
              <div>
                <Label htmlFor="tags">Tags</Label>  
                <InputField name="tags" id="tags" component="select"> 
                            
                </InputField>
                <Label htmlFor="tags">Tags</Label>  
                <InputField name="tags" id="tags" component="checkbox" />
              </div>           
            </Forms>
          )
          }
        </Formik>
    </Container>
    </>
    

  )
}