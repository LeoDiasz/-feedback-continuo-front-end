import {Formik, Form, Field} from "formik"
import toast from "react-hot-toast"
import {useState} from "react"
import { apiDbc } from "../../services/api"
import { ScreenAndRegisterUser } from '../../components/ScreenLoginAndRegisterUser'
import Button from '../../components/Button/styles'
import { useAuthContext } from "../../hooks/useAuthContext"

export const CreateUser = () => {
  const [avatar, setAvatar] = useState()
  const {signIn} = useAuthContext()

  const changeHandlerAvatar = (event) => {
    const file = event.target.files[0]

    const formData = new FormData()

    formData.append("file", file)

    setAvatar(formData)
    
	};

  const handleCreateUser = async (userDatas) => {
   
    const userFormated = {userNamer: userDatas.name + userDatas.lastName, userRole: "AGILE_COACH", email: userDatas.email, userPassword: userDatas.password}

    try {
   
      const {data: userDatasReturn} = await apiDbc.post("/users/create", userFormated)
    
      avatar.append("id", userDatasReturn.idUser)

      await apiDbc.put(`/users/update-file`, avatar, {headers: {'Content-Type': 'multipart/form-data'}})
      
      const userLogin = {login: userDatas.email, senha: userDatas.password}

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
      onSubmit = {values => {
        handleCreateUser(values)
      }}
    >
      {({errors, handleChange, values, setFieldValue}) =>(
        <Form>
          <div>
            <label htmlFor="name">NOME</label>
            <Field name="name" id="name" placeholder="Digite seu nome"/>
            <div>{errors.login}</div>
          </div>

          <div>
            <label htmlFor="lastName">SOBRENOME</label>
            <Field name="lastName" id="lastName" placeholder="Digite seu sobrenome"/>
            <div>{errors.login}</div>
          </div>

          <div>
            <label htmlFor="email">E-MAIL</label>
            <Field name="email" id="email" placeholder="Digite seu e-mail"/>
            <div>{errors.login}</div>
          </div>

        
          <div>
            <label htmlFor="password">SENHA</label>
            <Field name="password" id="password" placeholder="Digite uma senha"/>
            <div>{errors.password}</div>
          </div>

          <div>
            <label htmlFor="password"> CONFIRMAR SENHA</label>
            <Field name="confirmPassword" id="confirmPassword" placeholder="confirme sua senha"/>
            <div>{errors.password}</div>
          </div>

          <div>
            <label htmlFor="role">CARGO</label>
            <Field name="role" id="role" component="select">
              <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <div>{errors.login}</div>
          </div>

          <div>
            <label htmlFor="lastName">FOTO DE PERFIL</label>
            <input name="avatar" id="avatar" type="file" accept="image/png, image/jpeg" placeholder="Digite seu e-mail" onChange={changeHandlerAvatar} values={values.avatar}/>
            <div>{errors.login}</div>
          </div>

          <Button>ENTRAR</Button>
        </Form>
       )
      } 
    </Formik>
  </ScreenAndRegisterUser>
  )
}
