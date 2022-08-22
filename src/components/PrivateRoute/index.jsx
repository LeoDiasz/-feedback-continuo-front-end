import {Outlet, Navigate} from "react-router-dom"
import { useContext} from "react"
import {AuthContext} from "../../context/AuthContext"
import { Header } from "../Header"

export const PrivateRoute = ({ handleToggleTheme, theme}) => {
  const {isLogged} = useContext(AuthContext)

  return (
   <>
      {isLogged ? (
        <>
          <Header handleToggleTheme={handleToggleTheme} theme={theme}/>
          <Outlet/>
        </>
      ) :  (
        <Navigate to="/"/>
      )}

   </>
  )
}