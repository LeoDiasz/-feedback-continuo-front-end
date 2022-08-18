import styled from "styled-components";

const SectionFeedbacksContent = styled.section`
    border: 1px solid ${props => props.theme.colors.border};
    border-top: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
    box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
`;

const Tabs = styled.div`   
    display: grid;
    grid-template-columns: 50% 50%;   

`;

const ButtonTabs = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height ? props.height : '40px'};   
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.colors.border};  
    border-right: none;
    border-radius: 8px 8px 0 0;     
    cursor: pointer;
    transition: filter 0.3s;

    :hover {
        filter: brightness(0.96);
    }
`

export {SectionFeedbacksContent, Tabs, ButtonTabs}