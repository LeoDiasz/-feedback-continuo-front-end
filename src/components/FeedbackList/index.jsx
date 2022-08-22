import { FeedbackUserCard } from "../FeedbackUserCard"
import { Feedbackscontent } from "./styles"
import { useState } from "react"
import { Pager } from "./ComponentsPages/Pager"

export const FeedbackList = ({ listFeedbacks, type }) => {
    console.log(listFeedbacks)
    const [feedbacksPerPage, setFeedbackPerPage] = useState(5)
    const [atualPage, setAtualPage] = useState(0)

    const pages = Math.ceil(listFeedbacks.lenght / feedbacksPerPage)

    return (
        <Feedbackscontent>
            {/* <Pager pages={pages}/> */}
            {listFeedbacks.length > 0 ? (
                listFeedbacks.map((feedback, i) => (
                    <FeedbackUserCard
                        feedbackDatas={feedback}
                        type={type}
                        key={i}
                    />
                ))
            ) : (
                <h3>Nenhum feedback {type == "feedbacksGiven" ? "Recebido" : "Enviado"}</h3>
            )}
        </Feedbackscontent>
    )
}