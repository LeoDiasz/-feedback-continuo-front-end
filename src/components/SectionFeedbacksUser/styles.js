import styled from "styled-components";

const SectionFeedbacksContent = styled.section`
    padding: 15px;
    border: 1px solid ${props => props.theme.colors.border};
    border-top: none;
    border-radius: 0 0 8px 8px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
    box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
`;

const Tabs = styled.div`   
    position: relative;
    display: flex;
    height: 60px;

`;

const ButtonTabs = styled.button`
    position: absolute;
    bottom: 0;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height ? props.height : '50px'};   
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.colors.border};     
    border-radius: 8px 8px 0 0;  

    cursor: pointer;

    :last-child {
        right: 0;
    }
    
    :hover {
        filter: brightness(0.96);
    }
`

export { SectionFeedbacksContent, Tabs, ButtonTabs }