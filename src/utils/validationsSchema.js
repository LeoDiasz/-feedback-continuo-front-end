import * as Yup from "yup"
import { maskEmailDbc, invalidEmail} from "./masks"

const LoginSchema = Yup.object().shape({
  login: Yup.string()
  .matches(invalidEmail, "Email invalido")
  .matches(maskEmailDbc, 'O email deve conter: @dbccompany.com.br')
  .required('Obrigatório preencher!'),
  senha: Yup.string()
  .matches()
  .required("obrigatorio preencher")
})

const CreateUserSchema = Yup.object().shape({
 
})

const CreateFeedbackSchema = Yup.object().shape({

})

export {LoginSchema, CreateUserSchema, CreateFeedbackSchema}