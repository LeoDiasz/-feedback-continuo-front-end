import styled from "styled-components"

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.colors.secondary};
    color: ${props => props.color ? props.color : "#ffffff"};
    border: ${props => props.border ? props.border : "none"};
    width: ${props => props.width ? props.width : "100%"};
    border-radius: ${props => props.radius ? props.radius : "4px"};
    padding: ${props => props.padding ? props.padding : "10px"};
    
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
    height: 40px;
    border-radius: 8px;
    width: 100%;
    padding: 5px 20px;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    font-weight: bold;
    transition: filter 0.2s;
    color: #fff;
    
    &:hover {
        filter: brightness(0.98)
    }
`

export {Button, ButtonIcon, ButtonUpload}