import { Formik } from "formik"
import { useState } from "react"
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import PasswordStrengthBar from 'react-password-strength-bar';
import { listOptionsRole } from "../../utils/consts"
import { useUserContext } from "../../hooks/useUserContext";
import { CreateUserSchema } from "../../utils/validationsSchema"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import { FormDiv } from "../login/styles"
import { Button, ButtonUpload } from '../../components/Button/styles'
import { DivTextValidation, InputField, Label, TextValidation } from "../../components/InputStyles/styles"
import { DivUploadAvatar, DivInputUpload, DivSenha, DivConfirmSenha } from "./styles"

export const CreateUser = () => {

  const [avatarUserChoose, setAvatarUserChoose] = useState()
  const [passwordShow, setPasswordShow] = useState(false)
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)
  const { handleCreateUser } = useUserContext()

  const changeHandlerAvatar = (event) => {
    const file = event.target.files[0]
    setAvatarUserChoose(file)
  };

  const handleUploadAvatar = (event) => {
    event.preventDefault()

    const inputAvatar = document.getElementById("avatar")

    if (avatarUserChoose) {
      inputAvatar.value = null
      setAvatarUserChoose(null)
      return
    }

    inputAvatar.click()

  }

  return (
    <ScreenAndRegisterUser titleForm="Criar conta">
      <Formik
        initialValues={
          {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "AGILE_COACH",
          }
        }
        validationSchema={CreateUserSchema}
        onSubmit={values => {
          handleCreateUser(values, avatarUserChoose)
        }}
      >
        {({ errors, values }) => (
          <FormDiv>
            <div>
              <Label htmlFor="name">NOME COMPLETO * </Label>
              <InputField name="name" id="name" placeholder="Digite seu nome" autoComplete="off" />
              <DivTextValidation>
                <TextValidation id="id-message-name">{errors.name}</TextValidation>
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="email">E-MAIL * </Label>
              <InputField name="email" id="email" placeholder="email @dbccompany.com.br" autoComplete="off" />
              <DivTextValidation>
                <TextValidation id="id-message-email">{errors.email}</TextValidation>
              </DivTextValidation>
            </div>

            <DivSenha>
              <Label htmlFor="password">SENHA * </Label>
              <InputField name="password" id="password" type={passwordShow ? 'text' : 'password'} placeholder="Digite uma senha" autoComplete="off" />
              <button type='button' onClick={() => setPasswordShow(passwordShow ? false : true)}>{passwordShow ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}</button>
              <DivTextValidation>
                <TextValidation id="id-message-password">{errors.password}</TextValidation>
              </DivTextValidation>
              <PasswordStrengthBar password={values.password} />
            </DivSenha>

            <DivConfirmSenha>
              <Label htmlFor="password"> CONFIRMAR SENHA * </Label>
              <InputField name="confirmPassword" id="confirmPassword" type={confirmPasswordShow ? 'text' : 'password'} placeholder="confirme sua senha" autoComplete="off" />
              <button type='button' onClick={() => setConfirmPasswordShow(confirmPasswordShow ? false : true)}>{confirmPasswordShow ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}</button>
              <DivTextValidation>
                <TextValidation id="id-message-confirm-password">{errors.confirmPassword}</TextValidation>
              </DivTextValidation>
            </DivConfirmSenha>

            <div>
              <Label htmlFor="role">CARGO *</Label>
              <InputField name="role" id="role" component="select" autoComplete="off">
                {listOptionsRole && listOptionsRole.map((role, index) => (
                  <option key={index} value={role}>{role.replaceAll("_", " ")}</option>
                ))}
              </InputField>
              <DivTextValidation>
                <TextValidation>{errors.role}</TextValidation>
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="avatar">FOTO DE PERFIL</Label>
              <input
                name="avatar"
                id="avatar"
                type="file"
                accept="image/png, image/jpeg"
                placeholder="Digite seu e-mail"
                onChange={changeHandlerAvatar}
                values={avatarUserChoose}
                style={{ display: "none" }}
              />
              <DivUploadAvatar>
                <DivInputUpload onClick={handleUploadAvatar}>
                  <span>{avatarUserChoose ? avatarUserChoose.name : ""}</span>
                </DivInputUpload>

                <ButtonUpload onClick={handleUploadAvatar}>{avatarUserChoose ? "Remover imagem" : "Adicionar imagem"}</ButtonUpload>
              </DivUploadAvatar>
            </div>

            <Button
              id="id-button-create-user"
              type="submit"
              disabled={Object.values(errors).length > 0}
              autoComplete="off"
            >
              CRIAR CONTA
            </Button>
          </FormDiv>
        )}
      </Formik>
    </ScreenAndRegisterUser>
  )
}
