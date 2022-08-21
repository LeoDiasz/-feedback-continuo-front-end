import { useState } from "react"
import { FeedbackList } from '../../components/FeedbackList'
import { useThemeContext } from "../../hooks/useThemeContext"
import { SectionFeedbacksContent, Tabs, ButtonTabs } from './styles'

export const SectionFeedbacksUser = ({ listFeedbacksReceveid, listFeedbacksSend }) => {
    const {title} = useThemeContext()
    const [showFeedbacks, setShowFeedbacks] = useState(true)

    return (
        <div>
            <Tabs>
                <ButtonTabs onClick={() => setShowFeedbacks(true)} isUpHeight={showFeedbacks && "60px"}>Feedback Recebidos</ButtonTabs>
                <ButtonTabs onClick={() => setShowFeedbacks(false)} isUpHeight={!showFeedbacks && '60px'}>Feedback Enviados</ButtonTabs>
            </Tabs>
            <SectionFeedbacksContent typeTheme={title}>
                <FeedbackList type={showFeedbacks ? 'feedbacksGiven' : 'feedbackEntityReceived'} listFeedbacks={showFeedbacks ? listFeedbacksReceveid : listFeedbacksSend} />
            </SectionFeedbacksContent>
        </div>
    )
}