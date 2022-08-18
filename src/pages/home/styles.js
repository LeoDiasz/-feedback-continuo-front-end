import styled from "styled-components";

const MainContent = styled.main`
    > div {
        display: grid;
        grid-template-columns: 35% 65%;
        align-items: flex-start;
        width: 100%;
        padding: 60px 0;
    }
`

const DivFeedback = styled.div`
    border: 1px solid ${props => props.theme.colors.border};
    border-top: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
    box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
`;

const Abas = styled.div`   
    display: grid;
    grid-template-columns: 50% 50%;
    height: 40px;
    
    & p:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid ${props => props.theme.colors.border};        
        border-bottom: 1px solid ${props => props.theme.colors.border};        
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;        
        cursor: pointer;
    }

    & p:hover{
        background-color: ${props => props.theme.colors.border};
    }

    & p:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${props => props.theme.colors.border};  
        border-right: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;        
        cursor: pointer;
    }
`;

export {MainContent, DivFeedback, Abas}

