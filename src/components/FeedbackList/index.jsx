import { FeedbackUserCard } from "../FeedbackUserCard"
import { Feedbackscontent } from "./styles"

export const FeedbackList = ({ listFeedbacks, type}) => {
    
    return (
        <Feedbackscontent>
            {listFeedbacks.length > 0 ? ( 
                listFeedbacks.map( (feedback, i )=> (
                <FeedbackUserCard 
                    feedbackDatas={feedback} 
                    type={type} 
                    key={i}
                />
             ))
            ): (
                <h3>Nenhum feedback {type == "feedbacksGiven" ? "Recebido" : "Enviado"}</h3>
            )}
        </Feedbackscontent>
    )
}