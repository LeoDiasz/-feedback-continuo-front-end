import React from 'react'
import {useNavigate} from "react-router-dom"
import {useAuthContext} from "../../hooks/useAuthContext"
import {Button} from "../../components/Button/styles"
import { DivNotFound } from './styles'

export const NotFound = () => {
  const {token} = useAuthContext()
  const navigate = useNavigate()

  return (
    <DivNotFound>
      <div>
        <h1>Pagina não encontrada</h1>
        <Button onClick={() => token ? navigate("/home") : navigate("/")}>Voltar</Button>
      </div>
    </DivNotFound>
  )
}
