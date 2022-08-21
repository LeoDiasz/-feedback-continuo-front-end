import {Outlet, Navigate} from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import { Header } from "../Header"
export const PrivateRoute = ({ handleToggleTheme, theme}) => {
  const {isLogged} = useAuthContext()

  return (
    isLogged ? (
      <>
        <Header handleToggleTheme={handleToggleTheme} theme={theme}/>
        <Outlet/>
      </>
    ) :  (
    <Navigate to="/"/>
    )
  )

}