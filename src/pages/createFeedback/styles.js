import { Form, Field } from "formik";
import styled from "styled-components";

const Forms = styled(Form)`
    margin: 50px auto;
    padding: 30px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;

    >div:first-child {
        position: relative;
    }

`;

const SearchTagsContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        width: 100px;
        border-bottom: 5px;
        background-color: ${props => props.theme.colors.textGray};
        padding: 5px 10px;
        font-size: 14px;

        transition: filter 0.3s;
        cursor: pointer;

        :hover {
            filter: brightness(0.95)
        }
    }
    
`

const InputAuto = styled(Field)`
    width: 100%;
    min-height: 40px;
    padding: 0 20px;
    border-radius: 8px;
    margin-top: 8px;
    border: 1px solid ${props => props.theme.colors.textGray};
    color: ${props => props.theme.colors.textGrayDark};

    &::placeholder {
        color: ${props => props.theme.colors.textGray};
    }
    
    &:focus {
        outline: none;
    }
    
`  


const ListCollaboratorsContent = styled.ul`
        position: absolute;
        background: transparent;
        width: 100%;
        border-radius: 8px;
        display: flex;
        flex-direction: column;

        button {
            background: transparent;
            border: none;
            width: 100%;
            -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
            box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
        }

        
`

export {InputAuto, ListCollaboratorsContent, Forms, SearchTagsContent}