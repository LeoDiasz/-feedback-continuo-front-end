import {FadeLoader} from "react-spinners"
import {useThemeContext} from "../../hooks/useThemeContext"
import { DivLoading } from "./styles"

export const Loading = ({id}) => {
  const {colors} = useThemeContext()

  return (
    <DivLoading id={id}>
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