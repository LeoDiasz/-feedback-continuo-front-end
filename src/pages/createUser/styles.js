import styled from "styled-components";
import {baseStyleInputs} from "../../components/InputStyles/styles"

export const DivUploadAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 30px;

    button {
        width: 40%;
        margin-top: 8px;
    }
`

export const DivInputUpload = styled.div`
    ${baseStyleInputs};
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

`
export const DivPassword = styled.div`

    position: relative;  
    
    button {
        position: absolute;
        bottom: 50px;
        right: 15px;
        border: none;
        background-color: transparent;
        font-size: 18px;
        color: ${props => props.theme.colors.textGrayMiddle};

    :focus{
        outline: none;
    }
    } 
` 
export const DivConfirmPassword = styled.div`

    position: relative;  
    
    button {
        position: absolute;
        bottom: 25px;
        right: 15px;
        border: none;
        background-color: transparent;
        font-size: 18px;
        color: ${props => props.theme.colors.textGrayMiddle};

    :focus{
        outline: none;
    }
    } 
` 

    