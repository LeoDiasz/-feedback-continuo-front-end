import styled from "styled-components";

const FeedbackContent = styled.li`
    display: grid;
    grid-template-columns: 20% 65% 15%;
    align-items: center;
    width: 100%;
    padding: 18px 25px;

    position: relative;
    border: 1px solid ${props => props.theme.colors.backgroundSecondary};
    border-radius: 8px;
    background-color: ${props => props.theme.colors.background};

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
    align-items: flex-end;
    text-align: center;
    position: relative;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    span {
        font-size: ${props => props.type == "anonymous" ? "11px" : "12px"};
        color: ${props => props.type !== "anonymous" ? props.chooseColor ? props.theme.colors.title : props.theme.colors.textGrayMedio: props.theme.colors.white};
        background-color: ${props => props.type == "anonymous"  ? props.theme.colors.primary : ""};
        padding: ${props => props.type == "anonymous" && "3px 10px"} ;
        border-radius: ${props => props.type == "anonymous" ? "8px" : "0"} ;
        
    }

`

export {FeedbackContent, DivDatasUser, DivMessageFeedback, DivMoreInfos}