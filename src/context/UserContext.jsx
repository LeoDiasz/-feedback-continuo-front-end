import { createContext, useState } from "react";
import {apiDbc} from "../services/api"


const UserContext = createContext()

const UserProvider = ({children}) => {
  const [user, setUser] = useState()
  const [listCollaborators, setListCollaborators] = useState()

  const getDatasUser = async () => {

    try {
      const {data: datasUser} = await apiDbc.get("/users/recuperar-usuario-logado")
      setUser(datasUser)

    } catch(Error) {
      console.log(Error)
    }

  }

  const getListCollaborators = async () => {
    
    try {
      const {data: listCollaborators} = await apiDbc.get("/users/list-all")

      setListCollaborators(listCollaborators)

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