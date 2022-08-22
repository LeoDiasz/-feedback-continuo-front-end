import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {Toaster, toast} from "react-hot-toast"
import {apiDbc} from "../services/api"
import { Loading } from "../components/Loading";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState("")
  const [isLogged, setIslogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getToken = localStorage.getItem("token")
    
    if (getToken) {
      setIslogged(true)
      setToken(getToken)
      apiDbc.defaults.headers.common["authorization"] = getToken

    }
    
    const locationNow = window.location.pathname
  
    if(getToken && locationNow === "/"){
      navigate("/home")
    }
    
    setIsLoading(false)
    
  }, [isLogged])

  const signIn = async (userDatas, isNotNavigateForHome) => {

    try {  
      const {data: token} = await apiDbc.post("/users/login", userDatas)

      localStorage.setItem("token", token)
      setToken(token)
      setIslogged(true)
      
      apiDbc.defaults.headers.common["authorization"] = token

      if (!isNotNavigateForHome) {
        navigate("/home")
        toast.success("Seja bem vindo!")
      }
  
      
    } catch(Error) {
      toast.error("Erro de login. Email ou senha invalido.")
    }

  }

  const signOut = () => {
    
    if (token) {
      localStorage.removeItem("token")
      setToken()
      setIslogged(false)
      
      apiDbc.defaults.headers.common["authorization"] = undefined
      toast("Até logo!")
      navigate("/")
    }
  
  }
  
  if (isLoading) {
    <Loading/>
  }

  return (
    <AuthContext.Provider value={{signIn, token, signOut, isLogged, isLoading}}>
      <Toaster/>
      {children}
    </AuthContext.Provider>
  )
  
}

export {AuthProvider, AuthContext}