import {FadeLoader} from "react-spinners"
import { DivLoading } from "./styles"
import {useThemeContext} from "../../hooks/useThemeContext"

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