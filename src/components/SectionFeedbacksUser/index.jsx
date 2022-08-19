import { useState } from "react"
import { FeedbackList } from '../../components/FeedbackList'
import { SectionFeedbacksContent, Tabs, ButtonTabs } from './styles'

export const SectionFeedbacksUser = ({ listFeedbacksReceveid, listFeedbacksSend }) => {
    
    const [showFeedbacks, setShowFeedbacks] = useState(true)

    return (
        <div>
            <Tabs>
                <ButtonTabs onClick={() => setShowFeedbacks(true)} height={showFeedbacks && "60px"}>Feedback Recebidos</ButtonTabs>
                <ButtonTabs onClick={() => setShowFeedbacks(false)} height={!showFeedbacks && '60px'}>Feedback Enviados</ButtonTabs>
            </Tabs>
            <SectionFeedbacksContent>
                <FeedbackList listFeedbacks={showFeedbacks ? listFeedbacksReceveid.content : listFeedbacksSend.content} />
            </SectionFeedbacksContent>
        </div>
    )
}