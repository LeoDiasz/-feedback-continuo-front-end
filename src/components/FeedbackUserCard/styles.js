import styled from "styled-components";

const FeedbackContent = styled.li`
    display: grid;
    grid-template-columns: 20% 70% 10%;
    align-items: center;
    width: 100%;
    padding: 18px 25px;

    position: relative;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;
    background-color: #FAFAFA;

    cursor: pointer;
    transition: filter 0.2s;


    small {
        position: absolute;
        color: ${props => props.theme.colors.textGray};
        font-size: 12px;
        text-align: center;
        right: 0;
        bottom: 0;
        padding: 18px 25px;      
    } 
    
    &:hover {
        filter: brightness(0.98)
    }
`;

const DivDatasUser = styled.div`
    display: flex;

    > div {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        align-items: center;
        text-align: center;
        width: 70%;
        gap: 8px;

    }
    
    h4 {
        color: ${props => props.theme.colors.black};
    }

    p {
        color: ${props => props.theme.colors.textGrayDark};
        font-size: 12px;
        font-weight: bold;
        max-width: 100%;
    }

`

const DivMessageFeedback = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-right: 15px;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;

    > ul {
        align-items: flex-end;
    }

    p {
        color: ${props => props.theme.colors.textGrayDark};
        font-size: 14px;
        margin-top: 10px;
        width: 100%;
    }
`


const DivMoreInfos = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    > span {
        font-size: 14px;
        color: ${props => props.chooseColor ? props.theme.colors.black : props.theme.colors.textGrayMedio};
    }
`

export {FeedbackContent, DivDatasUser, DivMessageFeedback, DivMoreInfos}