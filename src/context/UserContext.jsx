import { createContext, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { apiDbc } from "../services/api"
import { toast } from "react-hot-toast"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [collaborator, setCollaborator] = useState()
  const { signIn } = useAuthContext()
  const [listCollaborators, setListCollaborators] = useState()
  const [usersPerPage, setUsersPerPage] = useState(10)
  const [atualPage, setAtualPage] = useState(0)
  const [pages, setPages] = useState(0)

  const getDatasCollaboratorById = async (id) => {
    try {
      const { data: datasCollaborator } = await apiDbc.get(`/users/recover-users?id=${id}`)

      datasCollaborator.avatar = datasCollaborator.avatar ? "data:image/png;base64," + datasCollaborator.avatar : null

      setCollaborator(datasCollaborator)

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

  const getListCollaborators = async () => {

    try {
      const { data: listCollaborators } = await apiDbc.get(`/users/list-all-pageable?page=${atualPage}&register=${usersPerPage}`)

      const listCollaboratorsFiltredAvatar = listCollaborators.content.map(collaborator => {
        return {
          avatar: collaborator.avatar ? "data:image/png;base64," + collaborator.avatar : null,
          idUser: collaborator.idUser,
          name: collaborator.name,
          userRole: collaborator.userRole,
        }
      })
      setListCollaborators(listCollaboratorsFiltredAvatar)
      setPages(listCollaborators.totalPages)
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

      await signIn(userLogin)

      formData.append("id", userDatasReturn.idUser)
      
      await apiDbc.put(`/users/update-file`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })

    
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
        setUsersPerPage,
        setAtualPage,
        pages,
        atualPage,
        usersPerPage,
        getDatasUser,
        getDatasCollaboratorById,
        getListCollaborators,
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