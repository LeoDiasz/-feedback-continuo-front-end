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
    width: 100%;
    height: 100%;
    padding-right: 15px;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    
    > ul {
        align-items: flex-end;
    }

    >div{
        width: 100%;
    }

    > div > p:nth-child(1) {
        font-size: 14px;
        margin-top: 10px;
        color: ${props => props.theme.colors.textGrayDark};

        max-width: ${props => props.isShowAllMessage && '100ch'};
        overflow: ${props => props.isShowAllMessage && 'hidden'};
        text-overflow: ${props => props.isShowAllMessage && 'ellipsis'};
        white-space: ${props => props.isShowAllMessage && 'nowrap'};
    }

    > div > span:nth-child(2){
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: ${props => props.theme.colors.textGrayDark};
        padding-top: 5px;
        font-size: 12px;
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

export { FeedbackContent, DivDatasUser, DivMessageFeedback, DivMoreInfos }