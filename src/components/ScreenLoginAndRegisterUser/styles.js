import styled from "styled-components"

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
`

const SectionBanner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: ${props => props.theme.colors.blue};
  min-height: 100vh;
  color: #fff;

  p {
    color: ${props => props.theme.colors.textGray};
    font-size: 24px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  img {
    width: 55%;
  }
`

const SectionForm = styled.section`
  min-height: 100vh;
  

  a {
    color: ${props => props.theme.colors.textGrayDark}
  }
  span {
    color: ${props => props.theme.colors.blue}
  }
`

export {DivContainer, SectionBanner, SectionForm}
