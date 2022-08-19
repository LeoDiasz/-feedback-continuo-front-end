import styled from "styled-components";

export const FeedbackContent = styled.li`
display: grid;
grid-template-columns: 25% 75%;
align-items: center;
padding: 5px 15px;
border: 1px solid ${props => props.theme.colors.border};
border-radius: 8px;


    & div:first-child{
        display: grid;
        justify-items: center;

        & h1 {
            font-size: 16px;
            margin: 10px 0 5px 0; 
        }
        
        & p {
            font-size: 14px;
            margin-bottom: 5px;           
        }
    }
`;