import { useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext)

  return context
}