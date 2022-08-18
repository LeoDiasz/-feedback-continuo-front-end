import {ThemeContext} from "styled-components"
import { useContext } from "react"


export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  return context
}