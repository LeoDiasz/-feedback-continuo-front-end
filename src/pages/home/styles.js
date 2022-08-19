import styled from "styled-components";

const MainContent = styled.main`
    background-color: ${props => props.theme.colors.backgroundLight};
    min-height: 100vh;

    > div {
        display: grid;
        grid-template-columns: 30% 70%;
        align-items: flex-start;
        width: 100%;
        padding: 60px 0;
        
    }
`

export {MainContent}

