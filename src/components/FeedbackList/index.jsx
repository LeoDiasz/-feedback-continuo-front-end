import { FeedbackUserCard } from "../FeedbackUserCard"
import { Feedbackscontent } from "./styles"

export const FeedbackList = ({ listFeedbacks, type}) => {

    

    return (
        <Feedbackscontent>
            {listFeedbacks && listFeedbacks.map( (feedback, i )=> (
                <FeedbackUserCard feedbackDatas={feedback} type={type} key={i}/>
            ))}
        </Feedbackscontent>
    )
}