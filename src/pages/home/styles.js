import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    margin-top: 20px;
`;

export const DivUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

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

export const FeedBackRecebidoContent = styled.div`
display: ${props => props.displayRecebido && props.displayRecebido};
grid-template-columns: 25% 75%;
align-items: center;
margin: 15px;
border: 1px solid ${props => props.theme.colors.border};
border-radius: 8px; 

    & div:first-child{
        display: grid;
        justify-items: center;
        padding: 8px;

     & h1 {
        font-size: 16px;
        margin: 10px 0 5px 0; 
    }
        
    & p {
        font-size: 14px;
        margin-bottom: 5px;           
    }

    & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
        }
    }
    
    & div:last-child {
        padding: 8px;
    }
`;

export const FeedBackEnviadoContent = styled.div`

    display: ${props => props.displayEnviado && props.displayEnviado};
    grid-template-columns: 25% 75%;
    align-items: center;
    margin: 15px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;

    & div:first-child{
        display: grid;
        justify-items: center;
        padding: 8px;

     & h1 {
        font-size: 16px;
        margin: 10px 0 5px 0; 
    }
        
    & p {
        font-size: 14px;
        margin-bottom: 5px;           
    }

    & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
        }
    }
    
    & div:last-child {
        padding: 8px;
    } 
`