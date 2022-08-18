import { createContext, useState } from "react"
import { apiDbc } from "../services/api"

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
    const [listFeedbacksReceveid, setListFeedbacksReceveid] = useState([])
    const [listFeedbacksSend, setListFeedbacksSend] = useState([])
    const [listTagsServer, setListTagsServer] = useState([])

    const getFeedbacksUser = async (type, id) => {
        try {
            const { data: listFeedbacks } = await apiDbc.get(`/feedback/${type}-por-id?page=0&id=${id}`)
            type === "receveid" ? setListFeedbacksReceveid(listFeedbacks) : setListFeedbacksSend(listFeedbacks)

        } catch (error) {
            console.log(error)
        }
    }

    const getTagsServer = async () => {
        try {
            const { data } = await apiDbc.get('/tag')
            setListTagsServer(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateFeedback = async (values) => {
        try {
            await apiDbc.post("/feedback", values)
            console.log(values)
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
            listTagsServer          
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackProvider, FeedbackContext }