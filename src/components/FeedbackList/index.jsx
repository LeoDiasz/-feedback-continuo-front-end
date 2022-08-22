import { useState } from "react"
import { useFeedbackContext } from "../../hooks/useFeedbackContext"
import { FeedbackUserCard } from "../FeedbackUserCard"
import { Pager } from "./ComponentsPages/Pager"
import { Feedbackscontent } from "./styles"

export const FeedbackList = ({ listFeedbacks, type }) => {

    const { currentPage, setCurrentPage } = useFeedbackContext()
    const [feedbacksPerPage, setFeedbackPerPage] = useState(3)
    
    const pages = Math.ceil(listFeedbacks.length / feedbacksPerPage)
    const startIndex = currentPage * feedbacksPerPage;
    const endIndex = startIndex + feedbacksPerPage;
    const currentFeedbacks = listFeedbacks.slice(startIndex, endIndex)

    return (
        <Feedbackscontent>
            {listFeedbacks.length > 0 ? (
                currentFeedbacks.map((feedback, i) => (
                    <FeedbackUserCard
                        feedbackDatas={feedback}
                        type={type}
                        key={i}
                    />
                ))
            ) : (
                <h3>Nenhum feedback {type == "feedbacksGiven" ? "Recebido" : "Enviado"}</h3>
            )}
            {listFeedbacks.length > 0 && <Pager pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
        </Feedbackscontent>
    )
}