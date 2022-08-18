import { Formik} from "formik"
import { useState } from "react"
import PasswordStrengthBar from 'react-password-strength-bar';
import { CreateUserSchema } from "../../utils/validationsSchema"
import {listOptionsRole} from "../../utils/consts"
import { useUserContext } from "../../hooks/useUserContext";
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import { DivTextValidation, InputField, Label, TextValidation } from "../../components/InputStyles/styles"
import { FormDiv } from "../login/styles"
import {DivUploadAvatar, DivInputUpload } from "./styles"
import {Button, ButtonUpload} from '../../components/Button/styles'

export const CreateUser = () => {
  const [avatarUserChoose, setAvatarUserChoose] = useState()
  const { handleCreateUser} = useUserContext()
 
  const changeHandlerAvatar = (event) => {
    const file = event.target.files[0]
    setAvatarUserChoose(file)
  };

  const handleUploadAvatar = (event) => {
    event.preventDefault()
    
    const inputAvatar = document.getElementById("avatar")

    if(avatarUserChoose) {
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
        {({ errors, values}) => (
          <FormDiv>
            <div>
              <Label htmlFor="name">NOME COMPLETO * </Label>
              <InputField name="name" id="name" placeholder="Digite seu nome" />
              <DivTextValidation>
                <TextValidation>{errors.name}</TextValidation> 
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="email">E-MAIL * </Label>
              <InputField name="email" id="email" placeholder="email @dbccompany.com.br" />
              <DivTextValidation>
                <TextValidation>{errors.email}</TextValidation> 
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="password">SENHA * </Label>
              <InputField name="password" id="password" placeholder="Digite uma senha" />
              <DivTextValidation>
                <TextValidation>{errors.password}</TextValidation>
              </DivTextValidation>
              <PasswordStrengthBar password={values.password}/>
            </div>

            <div>
              <Label htmlFor="password"> CONFIRMAR SENHA * </Label>
              <InputField name="confirmPassword" id="confirmPassword" placeholder="confirme sua senha" />
              <DivTextValidation>
                <TextValidation>{errors.confirmPassword}</TextValidation> 
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="role">CARGO *</Label>
              <InputField name="role" id="role" component="select">
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
              <DivUploadAvatar>
                <DivInputUpload onClick={handleUploadAvatar}>
                  <span>{avatarUserChoose ? avatarUserChoose.name: ""}</span>
                </DivInputUpload>

                <ButtonUpload onClick={handleUploadAvatar}>{avatarUserChoose ? "Remover imagem" : "Adicionar imagem"}</ButtonUpload>
              </DivUploadAvatar>
              <input 
                name="avatar" 
                id="avatar" 
                type="file" 
                accept="image/png, image/jpeg" 
                placeholder="Digite seu e-mail" 
                onChange={changeHandlerAvatar} 
                values={avatarUserChoose}
                style={{display: "none"}}
              />
            </div>              

            <Button id="createButtonId" type="submit" disabled={Object.values(errors).length > 0}>CRIAR CONTA</Button>
          </FormDiv>
        )}
      </Formik>
    </ScreenAndRegisterUser>
  )
}
