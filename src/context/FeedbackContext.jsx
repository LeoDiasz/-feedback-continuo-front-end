import { createContext, useState } from "react"
import { useUserContext } from "../hooks/useUserContext"
import { apiDbc } from "../services/api"

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
    const [listFeedbacksReceveid, setListFeedbacksReceveid] = useState([])
    const [listFeedbacksSend, setListFeedbacksSend] = useState([])
    const { listCollaborators } = useUserContext()
    const [feedback, setFeedback] = useState('')
    const [idUserReceiveFeed, setIdUserReceiveFeed ] = useState('')
    const [feedbackSuggestions, setFeedbackSuggestions] = useState([])
    const [getTags, setGetTags] = useState([])
    const [tags, setTags] = useState([])
    const [tagsSuggestions, setTagsSuggestions] = useState([])

    const getFeedbacksUser = async (type, id) => {
        try {
            const { data: listFeedbacks } = await apiDbc.get(`/feedback/${type}-por-id?page=0&id=${id}`)
            type === "receveid" ? setListFeedbacksReceveid(listFeedbacks) : setListFeedbacksSend(listFeedbacks)

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
        setTags([...tags, text])
    }

    const getTagsServer = async () => {
        try {
            const { data } = await apiDbc.get('/tag')
            setGetTags(data)
        } catch (error) {
            console.log(error)
        }
    }

   
    return (
        <FeedbackContext.Provider value={{
            getTagsServer,
            getFeedbacksUser,
            handleCreateFeedback,
            listFeedbacksReceveid,
            listFeedbacksSend,
            feedback,
            idUserReceiveFeed,
            feedbackSuggestions,
            tags,
            tagsSuggestions,
            onSuggestionFeedbackHandler,
            onChangeFeedbackHandler,
            onSuggestionTagsHandler,
            onChangeTagsHandler,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackProvider, FeedbackContext }