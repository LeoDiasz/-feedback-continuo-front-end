import { createContext, useState } from "react"
import toast from "react-hot-toast"
import { apiDbc } from "../services/api"
import anonimousUserImg from "../images/anonymousUser.png"

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
    const [listFeedbacksReceveid, setListFeedbacksReceveid] = useState([])
    const [listFeedbacksSend, setListFeedbacksSend] = useState([])
    const [listTagsServer, setListTagsServer] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    
    const getFeedbacksUser = async (type, id, isFiltered, isFilteredAnonimous) => {
        
        try {
            let { data: listFeedbacks } = await apiDbc.get(`/feedback/${type}-por-id?idUser=${id}`)

            if (isFiltered) {
                listFeedbacks = listFeedbacks.filter(feedback => {
                    if (type === "receveid" && feedback.publico) {
                        return feedback
                    }
                }) 
            }

            if(isFilteredAnonimous) {
                listFeedbacks = listFeedbacks.filter(feedback => {
                    if (type === "gived" && !feedback.anonymous) {
                        return feedback
                    }
                }) 
            }


            listFeedbacks = listFeedbacks.map(feedback => {
                if (type === "receveid") {
                    feedback.feedbacksGiven.avatar = feedback.feedbacksGiven.avatar ? "data:image/png;base64," + feedback.feedbacksGiven.avatar : null
                    
                    if (feedback.anonymous) {
                        feedback = {
                            message: feedback.message,
                            anonymous: feedback.anonymous,
                            publico: feedback.publico,
                            dataEHora: feedback.dataEHora,
                            feedbackUserId: feedback.feedbackUserId,
                            idFeedback: feedback.idFeedback,
                            tagsList: feedback.tagList,
                            feedbacksGiven: {
                                avatar: anonimousUserImg,
                                idUser: null,
                                name: "Anonimo",
                                userRole: "Anonimo",
                            }
                        }
                    }

                } else {
                    feedback.feedbackEntityReceived.avatar = feedback.feedbackEntityReceived.avatar ? "data:image/png;base64," + feedback.feedbackEntityReceived.avatar : null
                }
                return feedback;
            })

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

    const handleCreateFeedback = async (feedbackDatas) => {
        feedbackDatas.tagsList = feedbackDatas.tagsList.map(tag => { return { name: tag.name } })

        let isResetForm = false

        try {
            await apiDbc.post("/feedback", feedbackDatas)

            toast.success("Feedback criado com sucesso!")

            isResetForm = true

        } catch (Error) {
            
            if(Error.response.data.status == 400 && Error.response.data.message) {
                toast.error(Error.response.data.message)
            } else {
                toast.error("Erro ao criar feedback")

            }

            isResetForm = false
        }

        return isResetForm
    }

    return (
        <FeedbackContext.Provider value={{
            getTagsServer,
            getFeedbacksUser,
            handleCreateFeedback,
            listFeedbacksReceveid,
            listFeedbacksSend,
            listTagsServer,
            currentPage, 
            setCurrentPage
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackProvider, FeedbackContext }