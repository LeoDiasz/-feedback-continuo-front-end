import { Formik} from "formik"
import {CgAdd} from "react-icons/cg"
import toast from "react-hot-toast"
import { useState } from "react"
import PasswordStrengthBar from 'react-password-strength-bar';
import avatarUpload from "../../images/uploadUser.jpg"
import { apiDbc } from "../../services/api"
import { CreateUserSchema } from "../../utils/validationsSchema"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import { useAuthContext } from "../../hooks/useAuthContext"
import { DivTextValidation, InputField, Label, TextValidation } from "../../components/InputStyles/styles"
import { FormDiv } from "../login/styles"
import { PreviewAvatar, DivUploadAvatar } from "./styles"
import {Button, ButtonIcon, ButtonUpload} from '../../components/Button/styles'


export const CreateUser = () => {
  const [avatarUserChoose, setAvatarUserChoose] = useState()
  const { signIn } = useAuthContext()
  const listOptionsRole = ["AGILE_COACH", "ANALISTA_DE_DADOS", "ANALISTA_DE_RH", "ANALISTA_DE_TESTES", "ANALISTA_DE_SUPORTE", "ARQUITETO_DE_SISTEMAS", "ASSISTENTE_COMERCIAL", "COORDENADOR_DE_DEPARTAMENTO_PESSOAL", "DESENVOLVEDOR_DE_SOFTWARE", "ENGENHEIRO_DE_DADOS", "ENGENHEIRO_DE_SOFTWARE", "GERENTE_DE_SOLUCOES", "GERENTE_DE_PROJETOS", "LIDER_TECNICO", "UX_DESIGNER" ]

  
  const changeHandlerAvatar = (event) => {
    const file = event.target.files[0]
  
    setAvatarUserChoose(file)
  };

  const handleCreateUser = async (userDatas) => {

    const userFormated = { 
      name: userDatas.name + " " + userDatas.lastName, 
      userRole: userDatas.role, 
      email: userDatas.email, 
      userPassword: userDatas.password 
    }

    const formData = new FormData()

    formData.append("file", avatarUserChoose)

    try {

      const { data: userDatasReturn } = await apiDbc.post("/users/create", userFormated)

      formData.append("id", userDatasReturn.idUser)
      toast.success("Usuário criado com sucesso.")

      await apiDbc.put(`/users/update-file`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })

      const userLogin = { 
        login: userDatas.email, 
        senha: userDatas.password 
      }

      await signIn(userLogin)

    } catch (Error) {
      toast.error("Não foi possivel criar o usuario")

    }

  }

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
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "AGILE_COACH",
          }
        }
        validationSchema={CreateUserSchema}
        onSubmit={values => {
          handleCreateUser(values)
        }}
      >
        {({ errors, values}) => (
          <FormDiv>
            <div>
              <Label htmlFor="name">NOME * </Label>
              <InputField name="name" id="name" placeholder="Digite seu nome" />
              <DivTextValidation>
                <TextValidation>{errors.name}</TextValidation> 
              </DivTextValidation>
            </div>

            <div>
              <Label htmlFor="lastName">SOBRENOME * </Label>
              <InputField name="lastName" id="lastName" placeholder="Digite seu sobrenome" />
              <DivTextValidation>
                <TextValidation>{errors.lastName}</TextValidation> 
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
                <div>
                  <ButtonIcon onClick={handleUploadAvatar}>
                    <CgAdd/>
                  </ButtonIcon>
                  <ButtonUpload onClick={handleUploadAvatar}>{avatarUserChoose ? "Remover imagem" : "Adicionar imagem"}</ButtonUpload>
                </div>

                {avatarUserChoose ? (
                  <PreviewAvatar>
                    <img  src={URL.createObjectURL(avatarUserChoose)} onClick={handleUploadAvatar} />
                  </PreviewAvatar>
                ) : (
                  <PreviewAvatar>
                    <img  src={avatarUpload} onClick={handleUploadAvatar}/>
                  </PreviewAvatar>
                ) }

              </DivUploadAvatar>
              <input style={{display:"none"}} 
                name="avatar" 
                id="avatar" 
                type="file" 
                accept="image/png, image/jpeg" 
                placeholder="Digite seu e-mail" 
                onChange={changeHandlerAvatar} 
                values={avatarUserChoose}
              />
            </div>              

            <Button type="submit" disabled={Object.values(errors).length > 0}>CRIAR CONTA</Button>
          </FormDiv>
        )
        }
      </Formik>
    </ScreenAndRegisterUser>
  )
}
