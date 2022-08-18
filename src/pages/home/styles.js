import styled from "styled-components";

export const Grid = styled.div`
    width: 100%;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 35% 65%;
    padding: 60px 0;
`;

export const DivUsuarios = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        margin: 20px 0 10px 0; 
    }
    
    & p {
        margin-bottom: 10px;           
    }

    & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    }
    

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.blue};
        color: #FFFFFF;
        width: 280px;
        height: 50px;
        border-radius: 8px;
        margin-bottom: 15px;

        & span {
            display: grid;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: #FFFFFF;
            color: ${props => props.theme.colors.blue};
        }

        & p {
            margin-left: 12px;
            margin-bottom: 0;
        }
    }    
`;

export const DivFeedback = styled.div`
    border: 1px solid ${props => props.theme.colors.border};
    border-top: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
    box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
`;

export const Abas = styled.div`   
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
