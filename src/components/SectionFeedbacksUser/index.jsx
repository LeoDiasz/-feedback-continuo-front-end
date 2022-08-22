import { useState } from "react"
import { FeedbackList } from '../../components/FeedbackList'
import { useFeedbackContext } from "../../hooks/useFeedbackContext"
import { useThemeContext } from "../../hooks/useThemeContext"
import { SectionFeedbacksContent, Tabs, ButtonTabs } from './styles'

export const SectionFeedbacksUser = ({ listFeedbacksReceveid, listFeedbacksSend }) => {
    const {title} = useThemeContext()
    const { setCurrentPage } = useFeedbackContext()    
    const [showFeedbacks, setShowFeedbacks] = useState(true)    

    const setTabReceveid = () => {
        setShowFeedbacks(true)
        setCurrentPage(0)
    }
    const setTabGived = () => {
        setShowFeedbacks(false)
        setCurrentPage(0)
    }

    return (
        <section>
            <Tabs>
                <ButtonTabs onClick={setTabReceveid} isUpHeight={showFeedbacks && "60px"}>Feedback Recebidos</ButtonTabs>
                <ButtonTabs onClick={setTabGived} isUpHeight={!showFeedbacks && '60px'}>Feedback Enviados</ButtonTabs>
            </Tabs>
            <SectionFeedbacksContent typeTheme={title}>
                <FeedbackList type={showFeedbacks ? 'feedbacksGiven' : 'feedbackEntityReceived'} listFeedbacks={showFeedbacks ? listFeedbacksReceveid : listFeedbacksSend} />
            </SectionFeedbacksContent>
        </section>
    )
}