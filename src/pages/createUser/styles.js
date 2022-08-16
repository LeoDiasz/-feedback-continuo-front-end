import styled from "styled-components";

export const LabelUpload = styled.label`
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid ${props => props.theme.colors.textGrayDark};
    border-radius: 50%;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`