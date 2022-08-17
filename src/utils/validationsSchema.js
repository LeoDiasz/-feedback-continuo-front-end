import * as Yup from "yup"
import { emailDbc, invalidEmail} from "./masks"

const LoginSchema = Yup.object().shape({
  login: Yup.string()
  .matches(emailDbc, 'O email deve conter: @dbccompany.com.br')
  .required('Obrigatório preencher!'),
  senha: Yup.string()
  .required("obrigatorio preencher")
})

const CreateUserSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Mínimo de 2 caractéres')
  .max(20, 'Máximo de 20 caractéres')
  .required("Necessário preencher"),
  email: Yup.string()
  .matches(invalidEmail, "Email invalido")
  .matches(emailDbc, 'O email deve conter: @dbccompany.com.br')
  .required("Necessário preencher"),
  password: Yup.string()
  .matches(/[a-z]/, 'Senha deve conter uma letra minuscula')
  .matches(/[A-Z]/, 'Senha deve conter uma letra maiuscula')
  .matches(/\d/, 'A senha deve conter ao menos um número')
  .matches(/[^a-zA-Z0-9]+/g, 'A senha deve conter ao menos um caractre especial')
  .required("Necessário preencher"),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais.')
  .required("Necessário preencher"),
  role: Yup.string()
  .required("Necessário preencher"),
})

const CreateFeedbackSchema = Yup.object().shape({

})

export {LoginSchema, CreateUserSchema, CreateFeedbackSchema}