import {FadeLoader} from "react-spinners"
import {useThemeContext} from "../../hooks/useThemeContext"
import { DivLoading } from "./styles"

export const Loading = () => {
  const {colors} = useThemeContext()

  return (
    <DivLoading>
      <FadeLoader
        color={colors.primary}
        cssOverride={{}}
        loading
        size={30}
        speedMultiplier={2}
    />
    </DivLoading>
  )
}