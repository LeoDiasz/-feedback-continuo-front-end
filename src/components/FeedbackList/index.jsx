import { FeedbackUserCard } from "../FeedbackUserCard"
import { Feedbackscontent } from "./styles"
import { useState } from "react"
import { Pager } from "./ComponentsPages/Pager"

export const FeedbackList = ({ listFeedbacks, type }) => {

    const [feedbacksPerPage, setFeedbackPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

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
            <Pager pages={pages} setCurrentPage={setCurrentPage} />
        </Feedbackscontent>
    )
}