import { Formik } from "formik"
import { useState } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useAuthContext } from "../../hooks/useAuthContext"
import ScreenLoginAndRegisterUser from '../../components/ScreenLoginAndRegisterUser'
import { LoginSchema } from "../../utils/validationsSchema"
import { Button } from '../../components/Button/styles'
import { DivTextValidation, InputField, TextValidation, Label } from "../../components/InputStyles/styles"
import { FormDiv } from "./styles";
import { Loading } from "../../components/Loading"

export const Login = () => {
  const { signIn, isLoading } = useAuthContext()
  const [passwordShow, setPasswordShow] = useState(false)

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <ScreenLoginAndRegisterUser titleForm="Entrar na conta" isScreenLogin>
      <Formik
        initialValues={{ login: "", senha: "" }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          signIn(values)
        }}
      >
        {({ errors }) => (
          <FormDiv>
            <div>
              <Label htmlFor="login">E-MAIL</Label>
              <InputField name="login" id="login" placeholder="Digite seu e-mail" />
              <DivTextValidation>
                <TextValidation>{errors.login}</TextValidation>
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="senha">SENHA</Label>
              <InputField name="senha" id="senha" type={passwordShow ? 'text' : 'password'} placeholder="Digite sua senha" />
              <button type='button' onClick={() => setPasswordShow(passwordShow ? false : true)}>{passwordShow ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}</button>
              <DivTextValidation>
                <TextValidation>{errors.senha}</TextValidation>
              </DivTextValidation>
            </div>
            <Button type="submit" id="id-button-login" disabled={Object.values(errors).length > 0}>ENTRAR</Button>
          </FormDiv>
        )}
      </Formik>
    </ScreenLoginAndRegisterUser>
  )
}
