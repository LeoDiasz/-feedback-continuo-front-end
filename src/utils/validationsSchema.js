import * as Yup from "yup"

const LoginSchema = Yup.object().shape({
  login: Yup.string(),
  senha: Yup.string()
})

const CreateUserSchema = Yup.object().shape({
 
})

const CreateFeedbackSchema = Yup.object().shape({

})

export {LoginSchema, CreateUserSchema, CreateFeedbackSchema}