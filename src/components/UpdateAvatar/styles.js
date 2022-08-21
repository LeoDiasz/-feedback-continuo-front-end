import styled from "styled-components";

export const UploadAvatar = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    width: 35px;
    height: 35px;
    right: 20px;
    bottom: 20px;
    border: 4px solid #FFF;
    background-color: ${props => props.theme.colors.border};
    border-radius: 50%;
    cursor: pointer;

    label {
        cursor: pointer;
    }
`