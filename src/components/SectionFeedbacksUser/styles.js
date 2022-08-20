import styled from "styled-components";

const SectionFeedbacksContent = styled.section`
    padding: 15px;
    border: 1px solid ${props => props.theme.colors.border};
    border-top: none;
    border-radius: 0 0 8px 8px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
    box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
    background-color: ${props => props.theme.colors.backgroundLight};
`;

const Tabs = styled.div`   
    position: relative;
    display: flex;
    height: 60px;

`;

const ButtonTabs = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 50%;
    height: ${props => props.isUpHeight ? props.isUpHeight : '50px'};   
    background: ${props => props.isUpHeight ? "#FFFFFF" : "#EEEEEE"};
    border: 1px solid ${props => props.theme.colors.border};     
    border-radius: 8px 8px 0 0; 
    font-weight: bold;
    font-size: 14px;
    color: ${props => props.isUpHeight ? props.theme.colors.black : "#9E9E9E"};

    cursor: pointer;

    :last-child {
        right: 0;
    }
    
    :hover {
        filter: brightness(0.96);
    }
`

export { SectionFeedbacksContent, Tabs, ButtonTabs }