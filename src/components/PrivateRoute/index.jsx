import {Outlet, Navigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { apiDbc } from "../../services/api"
import { Header } from "../Header"
import { useUserContext } from "../../hooks/useUserContext"
import { Loading } from "../Loading"

export const PrivateRoute = ({ handleToggleTheme, theme}) => {
  const {getDatasUser} = useUserContext()
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem("token")

  if(token) {
    apiDbc.defaults.headers.common["authorization"] = token
  }

  const setup  = async () => {
    await  getDatasUser()
    setLoading(false)
  }

  useEffect(() => {
    setup()
  }, [])
  
  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
   <>
      {token ? (
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