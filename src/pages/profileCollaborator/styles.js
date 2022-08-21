import styled from "styled-components";

const SectionContent = styled.section`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;

  > div {
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: flex-start;
    width: 100%;
    padding: 60px 0;
  }

`


export {SectionContent}
