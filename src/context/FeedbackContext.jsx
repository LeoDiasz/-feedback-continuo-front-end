import { createContext, useState } from "react"
import { useUserContext } from "../hooks/useUserContext"
import { apiDbc } from "../services/api"

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
    const { listCollaborators } = useUserContext()
    
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const onSuggestionHandler = (text) => {
        setText(text)
        setSuggestions([])
    }

    const onChangeHandler = (text) => {
        let filtro = []

        if (text.length > 0) {

            filtro = listCollaborators.filter(({ name }) => {
                const regex = new RegExp(`${text}`, "gi")
                return name.match(regex)
            })
        }
        setSuggestions(filtro)
        setText(text)
    }

    const getFeedbackUser = async () => {
        try {
            const { data: dataFeedback } = await apiDbc.get("/feedback/gived?page=0")
            console.log(dataFeedback)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateFeedback = async (values) => {
        try {
            const data = await apiDbc.post("/feedback", values)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FeedbackContext.Provider value={{
            text,
            suggestions,
            getFeedbackUser,
            handleCreateFeedback,
            onSuggestionHandler,
            onChangeHandler

        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackProvider, FeedbackContext }