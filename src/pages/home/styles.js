import styled from "styled-components";

const MainContent = styled.main`
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;

    > div {
        display: grid;
        grid-template-columns: 30% 70%;
        align-items: flex-start;
        width: 100%;
        padding: 60px 0;
        
    }

    @media(max-width: 1350px) {

        > div {
            width: 95%;
        }
    }


    @media(max-width: 1000px) {

        > div {
            grid-template-columns: 1fr;
            gap: 50px;

            > section:first-child {
                justify-content: center;
            }
            
        }
    }

    
`

export {MainContent}

