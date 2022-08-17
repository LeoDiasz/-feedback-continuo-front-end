import { createContext, useState } from "react";
import {apiDbc} from "../services/api"


const UserContext = createContext()

const UserProvider = ({children}) => {
  const [user, setUser] = useState()
  const [listCollaborators, setListCollaborators] = useState()

  const getDatasUser = async () => {

    try {
      const {data: datasUser} = await apiDbc.get("/users/recuperar-usuario-logado")

      datasUser.avatar = datasUser.avatar ?  "data:image/png;base64," + datasUser.avatar : null

      setUser(datasUser)

    } catch(Error) {
      console.log(Error)
    }

  }

  const getListCollaborators = async () => {
    
    try {
      const {data: listCollaborators} = await apiDbc.get("/users/list-all")
      
      const listCollaboratorsFiltredAvatar = listCollaborators.map(collaborator => {
        const collaboratorFiltred = {
          avatar: collaborator.avatar ? "data:image/png;base64," + collaborator.avatar : null,
          idUser: collaborator.idUser,
          name: collaborator.name,
          userRole: collaborator.userRole,
        }
        return collaboratorFiltred
      })

      setListCollaborators(listCollaboratorsFiltredAvatar)
    } catch(Error) {
      console.log(Error)
    }
   
  }
  
  return (
    <UserContext.Provider value={{user, getDatasUser, getListCollaborators, listCollaborators}}>
      {children}
    </UserContext.Provider>
  )
  
}

export {UserProvider, UserContext}