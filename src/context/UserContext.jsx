import {useNavigate} from "react-router-dom"
import { createContext, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { apiDbc } from "../services/api"
import { toast } from "react-hot-toast"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [collaborator, setCollaborator] = useState()
  const { signIn } = useAuthContext()
  const [listCollaborators, setListCollaborators] = useState([])
  const [listCollaboratorsPagesOff, setListCollaboratorsPagesOff] = useState()
  const navigate = useNavigate()

  const getDatasCollaboratorById = async (id) => {
    try {
      const { data: datasCollaborator } = await apiDbc.get(`/users/recover-users?id=${id}`)

      datasCollaborator.avatar = datasCollaborator.avatar ? "data:image/png;base64," + datasCollaborator.avatar : null

      setCollaborator(datasCollaborator)

      return datasCollaborator
    } catch (Error) {

      console.log(Error)
    }
  }

  const getDatasUser = async () => {
    try {
      const { data: datasUser } = await apiDbc.get("/users/recover-logged-user")
      datasUser.avatar = datasUser.avatar ? "data:image/png;base64," + datasUser.avatar : null

      setUser(datasUser)
      return { id: datasUser.idUser }

    } catch (Error) {
      console.log(Error)
      return { id: null }
    }
  }

  const getListCollaborators = async (currentPage) => {

    try {
      const { data: listCollaborators } = await apiDbc.get(`/users/list-all-pageable?page=${currentPage}&register=10`)

      const listCollaboratorsFiltredAvatar = listCollaborators.content.map(collaborator => {
        return {
          avatar: collaborator.avatar ? "data:image/png;base64," + collaborator.avatar : null,
          idUser: collaborator.idUser,
          name: collaborator.name,
          userRole: collaborator.userRole,
        }
      })

      setListCollaborators((prevListCollaborators) => [...prevListCollaborators, ...listCollaboratorsFiltredAvatar])
    } catch (Error) {
      console.log(Error)
    }
  }

  const getListCollaboratorsWithoutPages = async () => {

    try {
      const { data: listCollaboratorsPagesOff } = await apiDbc.get(`/users/list-all`)
      const listCollaboratorsPagesOffFiltredAvatar = listCollaboratorsPagesOff.map(collaborator => {
        return {
          avatar: collaborator.avatar ? "data:image/png;base64," + collaborator.avatar : null,
          idUser: collaborator.idUser,
          name: collaborator.name,
          userRole: collaborator.userRole,
        }
      })

      setListCollaboratorsPagesOff(listCollaboratorsPagesOffFiltredAvatar)
    } catch (Error) {
      console.log(Error)
    }
  }

  const handleCreateUser = async (userDatas, avatarUser) => {

    const userFormated = {
      name: userDatas.name,
      userRole: userDatas.role,
      email: userDatas.email,
      userPassword: userDatas.password
    }

    const formData = new FormData()

    formData.append("file", avatarUser)

    try {

      const { data: userDatasReturn } = await apiDbc.post("/users/create", userFormated)

      const userLogin = {
        login: userDatas.email,
        senha: userDatas.password
      }

      await signIn(userLogin, true)

      formData.append("id", userDatasReturn.idUser)
      
      await apiDbc.put(`/users/update-file`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      
      navigate("/home")
      toast.success("Usuário criado com sucesso. Seja bem vindo!")
    
    } catch (Error) {

      if (Error.response.data.status == 400) {
        toast.error(Error.response.data.message)
        return
      }

      toast.error("Não foi possivel criar o usuario")

    }

  }

  return (
    <UserContext.Provider value={
      {
        getDatasUser,
        getDatasCollaboratorById,
        getListCollaborators,
        getListCollaboratorsWithoutPages,
        listCollaboratorsPagesOff,
        handleCreateUser,
        user,
        collaborator,
        listCollaborators,
      }}>
      {children}
    </UserContext.Provider>
  )

}

export { UserProvider, UserContext }