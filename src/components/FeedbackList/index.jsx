import { FeedbackUserCard } from "../FeedbackUserCard"

export const FeedbackList = ({ listFeedbacks }) => {

    

    return (
        <>
            {listFeedbacks && listFeedbacks.map( feedback => (
                <FeedbackUserCard feedbackDatas={feedback}/>
            ))}
        </>
    )
}