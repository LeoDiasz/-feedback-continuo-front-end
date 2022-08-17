import styled from "styled-components";

export const PreviewAvatar = styled.div`
    margin-right: 30px;
    display: flex;
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

    img:hover {
        filter: brightness(0.98);
    }
`

export const DivUploadAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    
    > div:first-child {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 8px;
        
    }
    
`