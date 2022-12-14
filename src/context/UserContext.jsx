import {useNavigate} from "react-router-dom"
import { createContext, useState } from "react";
import { toast } from "react-hot-toast"
import { useAuthContext } from "../hooks/useAuthContext";
import { apiDbc } from "../services/api"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [collaborator, setCollaborator] = useState("")
  const [listCollaborators, setListCollaborators] = useState([])
  const [listCollaboratorsPagesOff, setListCollaboratorsPagesOff] = useState([])
  const [updateAvatar, setUpdateAvatar] = useState(false)
  const { signIn } = useAuthContext()
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
      toast.success("Usu??rio criado com sucesso. Seja bem vindo!")
    
    } catch (Error) {

      if (Error.response.data.status == 400 && Error.response.data.message) {
        toast.error(Error.response.data.message)
        return
      }

      toast.error("N??o foi possivel criar o usuario")

    }

  }

  const handleUpdateAvatar = async (event) => {
    const file = event.target.files[0]

    if (!file) return

    const formatedPhoto = new FormData()

    formatedPhoto.append("file", file)

    formatedPhoto.append("id", user.idUser)

    try {
        await apiDbc.put(`/users/update-file`, formatedPhoto, { headers: { 'Content-Type': 'multipart/form-data' } })
       !updateAvatar ? setUpdateAvatar(true) : setUpdateAvatar(false)
    } catch (error) {
        console.log(error)
    }

}

  return (
    <UserContext.Provider value={
      {
        getDatasUser,
        getDatasCollaboratorById,
        getListCollaborators,
        getListCollaboratorsWithoutPages,
        handleUpdateAvatar,
        handleCreateUser,
        user,
        listCollaboratorsPagesOff,
        listCollaborators,
        setListCollaborators,
        collaborator,
        updateAvatar
      }}>
      {children}
    </UserContext.Provider>
  )

}

export { UserProvider, UserContext }