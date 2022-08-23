import styled from "styled-components";

export const UploadAvatar = styled.button`
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
    width: 35px;
    height: 35px;
    right: 20px;
    bottom: 20px;
    border: 4px solid #FFF;
    border-radius: 50%;
    cursor: pointer;

    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`