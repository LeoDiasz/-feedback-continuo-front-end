import styled from "styled-components";

const FeedbackContent = styled.li`
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    gap: 25px;
    padding: 20px 25px;
    border: 1px solid ${props => props.theme.colors.border};
    background-color: #FAFAFA;
    border-radius: 8px;
    cursor: pointer;

    transition: filter 0.2s;

    :hover {
        filter: brightness(0.99)
    }
`;

const DivDatasUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
    h2 {
    color: ${props => props.theme.colors.black}
    }

    small, p {
    color: ${props => props.theme.colors.textGrayDark};
    }

    p {
        margin-top: 4px;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: bold;
    }


    &::after {
        content: "";
    }
`

const DivMessageFeedback = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: flex-start;

    p {
        margin-top: 10px;
        width: 100%;

    }
`

export {FeedbackContent, DivDatasUser, DivMessageFeedback}