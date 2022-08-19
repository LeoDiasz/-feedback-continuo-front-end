import { FeedbackUserCard } from "../FeedbackUserCard"
import { Feedbackscontent } from "./styles"

export const FeedbackList = ({ listFeedbacks }) => {

    

    return (
        <Feedbackscontent>
            {listFeedbacks && listFeedbacks.map( feedback => (
                <FeedbackUserCard feedbackDatas={feedback}/>
            ))}
        </Feedbackscontent>
    )
}