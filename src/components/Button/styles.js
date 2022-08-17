import styled from "styled-components"

const Button = styled.button`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.colors.green};
    color: ${props => props.color ? props.color : "#ffffff"};
    border: ${props => props.border ? props.border : "none"};
    border-radius: 4px;
    padding: 10px;
`

const ButtonIcon = styled.button `
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;

    font-size: 30px;
    color: ${props => props.theme.colors.blue};

    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.98)
    }
`

const ButtonUpload = styled.button `
    border-radius: 8px;
    padding: 5px 15px;
    background: transparent;
    border: 1px solid;
    border-color: ${props => props.theme.colors.textGray};
    color: ${props => props.theme.colors.blue};
    font-weight: bold;

    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.98)
    }
`

export {Button, ButtonIcon, ButtonUpload}