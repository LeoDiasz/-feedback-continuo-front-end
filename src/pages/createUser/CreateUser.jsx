import { Formik, Form, Field } from "formik"
import toast from "react-hot-toast"
import { useState } from "react"
import { apiDbc } from "../../services/api"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import Button from '../../components/Button/styles'
import { useAuthContext } from "../../hooks/useAuthContext"
import { FormDiv, Label } from "../login/styles"
import { InputField } from "../../components/InputStyles/styles"
import { LabelUpload } from "./styles"
import uploadUser from "../../images/uploadUser.jpg"

export const CreateUser = () => {
  const [avatar, setAvatar] = useState()
  const [fotoUsuario, setFotoUsuario] = useState()
  const { signIn } = useAuthContext() 

  const changeHandlerAvatar = (event) => {
    const file = event.target.files[0]

    setFotoUsuario(file)

    const formData = new FormData()

    formData.append("file", file)

    setAvatar(formData)


  };

  const handleCreateUser = async (userDatas) => {

    const userFormated = { userNamer: userDatas.name + userDatas.lastName, userRole: "AGILE_COACH", email: userDatas.email, userPassword: userDatas.password }

    try {

      const { data: userDatasReturn } = await apiDbc.post("/users/create", userFormated)

      avatar.append("id", userDatasReturn.idUser)

      await apiDbc.put(`/users/update-file`, avatar, { headers: { 'Content-Type': 'multipart/form-data' } })

      const userLogin = { login: userDatas.email, senha: userDatas.password }

      await signIn(userLogin)

    } catch (Error) {
      toast.error("Não foi possivel criar o usuario")

    }

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
            role: "",
          }
        }
        onSubmit={values => {
          handleCreateUser(values)
        }}
      >
        {({ errors, handleChange, values, setFieldValue }) => (
          <FormDiv>
            <div>
              <Label htmlFor="name">NOME</Label>
              <InputField name="name" id="name" placeholder="Digite seu nome" />
              <div>{errors.login}</div>
            </div>

            <div>
              <Label htmlFor="lastName">SOBRENOME</Label>
              <InputField name="lastName" id="lastName" placeholder="Digite seu sobrenome" />
              <div>{errors.login}</div>
            </div>

            <div>
              <Label htmlFor="email">E-MAIL</Label>
              <InputField name="email" id="email" placeholder="Digite seu e-mail" />
              <div>{errors.login}</div>
            </div>

            <div>
              <Label htmlFor="password">SENHA</Label>
              <InputField name="password" id="password" placeholder="Digite uma senha" />
              <div>{errors.password}</div>
            </div>

            <div>
              <Label htmlFor="password"> CONFIRMAR SENHA</Label>
              <InputField name="confirmPassword" id="confirmPassword" placeholder="confirme sua senha" />
              <div>{errors.password}</div>
            </div>

            <div>
              <Label htmlFor="role">CARGO</Label>
              <InputField name="role" id="role" component="select">
                <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </InputField>
              <div>{errors.login}</div>
            </div>

            <div>
              <LabelUpload htmlFor="avatar">{fotoUsuario ? <img src={URL.createObjectURL(fotoUsuario)} /> : <img src={uploadUser} alt="" /> }</LabelUpload>
              <input style={{display:"none"}} name="avatar" id="avatar" type="file" accept="image/png, image/jpeg" placeholder="Digite seu e-mail" onChange={changeHandlerAvatar} values={values.avatar} />
              <div>{errors.login}</div>
            </div>              

            <Button>ENTRAR</Button>
          </FormDiv>
        )
        }
      </Formik>
    </ScreenAndRegisterUser>
  )
}
