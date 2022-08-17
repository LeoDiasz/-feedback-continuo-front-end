import {Outlet, Navigate} from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"

export const PrivateRoute = () => {
  const {isLogged} = useAuthContext()

  return (
    isLogged ? <Outlet/> : <Navigate to="/"/>
  )

}