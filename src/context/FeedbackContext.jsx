import { createContext, useState } from "react"
import { useUserContext } from "../hooks/useUserContext"
import { apiDbc } from "../services/api"

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
    const { listCollaborators } = useUserContext()
    
    ////////////////////////////////////////////////////////////////
    //AutoComplete Feedback
    const [feedback, setFeedback] = useState('')
    const [idUserReceiveFeed, setIdUserReceiveFeed ] = useState('')
    const [feedbackSuggestions, setFeedbackSuggestions] = useState([])
    
    const onSuggestionFeedbackHandler = (feedback, idUser) => {
        setFeedback(feedback)
        setFeedbackSuggestions([])
        setIdUserReceiveFeed(idUser)
    }
    
    const onChangeFeedbackHandler = (feedback) => {
        let filtro = []
        console.log(filtro)
        if (feedback.length > 0) {
            filtro = listCollaborators.filter(({ name }) => {
                const regex = new RegExp(`${feedback}`, "gi")
                return name.match(regex)
            })
        }
        setFeedbackSuggestions(filtro)
        setFeedback(feedback)
    }

    ////////////////////////////////////////////////////////////////
    //AutoComplete Tags
    const [tags, setTags] = useState('')
    const [tagsSuggestions, setTagsSuggestions] = useState([])
    
    const onSuggestionTagsHandler = (text) => {
        setTags(text)
        setTagsSuggestions([])
    }

    const onChangeTagsHandler = (text) => {
        let filtro = []
        if (text.length > 0) {
            filtro = getTags.filter(({ name }) => {
                const regex = new RegExp(`${text}`, "gi")
                return name.match(regex)
            })
        }
        setTagsSuggestions(filtro)
        setTags(text)
    }
    ////////////////////////////////////////////////////////////////

    const [getTags, setGetTags] = useState([])

    const getTagsServer = async () => {
        try {
            const { data } = await apiDbc.get('/tag')
            setGetTags(data)
        } catch (error) {
            console.log(error)
        }
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
            feedback,
            idUserReceiveFeed,
            feedbackSuggestions,
            tags,
            tagsSuggestions,
            getFeedbackUser,
            handleCreateFeedback,
            onSuggestionFeedbackHandler,
            onChangeFeedbackHandler,
            onSuggestionTagsHandler,
            onChangeTagsHandler,
            getTagsServer

        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackProvider, FeedbackContext }