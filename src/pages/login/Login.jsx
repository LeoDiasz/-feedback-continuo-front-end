import {Formik} from "formik"
import {useAuthContext} from "../../hooks/useAuthContext"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import {Button} from '../../components/Button/styles'
import { LoginSchema } from "../../utils/validationsSchema"
import { DivTextValidation, InputField, TextValidation, Label } from "../../components/InputStyles/styles"
import { FormDiv} from "./styles";

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
              <DivTextValidation>
                <TextValidation>{errors.login}</TextValidation>
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="senha">SENHA</Label>
              <InputField name="senha" id="senha" placeholder="Digite sua senha"/>
              <DivTextValidation>
                <TextValidation>{errors.senha}</TextValidation>
              </DivTextValidation>
            </div>
            <Button type="submit" id="id-button-login" disabled={Object.values(errors).length > 0}>ENTRAR</Button>
          </FormDiv>
         )
        } 
      </Formik>
    </ScreenAndRegisterUser>
  )
}
