import {Formik, Form, Field} from "formik"
import {useAuthContext} from "../../hooks/useAuthContext"
import MaskedInput from "react-text-mask"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import Button from '../../components/Button/styles'
import { LoginSchema } from "../../utils/validationsSchema"

export const Login = () => {
  const {signIn} = useAuthContext()

  return (
    <ScreenAndRegisterUser titleForm="Entrar na conta" isScreenLogin>
      <Formik
        initialValues={{login: "", senha: ""}}
        validationSchema={LoginSchema}
        onSubmit = {values => {
          signIn(values)
        }}
      >
        {({errors}) =>(
          <Form>
            <div>
              <label htmlFor="login">E-MAIL</label>
              <Field name="login" id="login" placeholder="Digite seu e-mail"/>
              <div>{errors.login}</div>
            </div>

            <div>
              <label htmlFor="senha">SENHA</label>
              <Field name="senha" id="senha" placeholder="Digite sua senha"/>
              <div>{errors.senha}</div>
            </div>

            <Button>ENTRAR</Button>
          </Form>
         )
        } 
      </Formik>
    </ScreenAndRegisterUser>
  )
}
