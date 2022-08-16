import {Formik, Form, Field} from "formik"
import {useAuthContext} from "../../hooks/useAuthContext"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import Button from '../../components/Button/styles'
import { LoginSchema } from "../../utils/validationsSchema"
import { InputField, MaskInput } from "../../components/InputStyles/styles"
import { FormDiv, Label } from "./styles";

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
          <FormDiv>
            <div>
              <Label htmlFor="login">E-MAIL</Label>
              <InputField name="login" id="login" placeholder="Digite seu e-mail"/>
              <div>{errors.login}</div>
            </div>

            <div>
              <Label htmlFor="senha">SENHA</Label>
              <InputField name="senha" id="senha" placeholder="Digite sua senha"/>
              <div>{errors.senha}</div>
            </div>
            <Button>ENTRAR</Button>
          </FormDiv>
         )
        } 
      </Formik>
    </ScreenAndRegisterUser>
  )
}
