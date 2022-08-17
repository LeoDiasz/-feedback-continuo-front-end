import { createContext } from "react"
import { apiDbc } from "../services/api"

const FeedbackContext = createContext() 

const FeedbackProvider = ({ children }) => {

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
            const data  = await apiDbc.post("/feedback", values)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FeedbackContext.Provider value={{ getFeedbackUser,
        handleCreateFeedback 
        }}>
            {children}
        </FeedbackContext.Provider>
    )
} 

export {FeedbackProvider, FeedbackContext}