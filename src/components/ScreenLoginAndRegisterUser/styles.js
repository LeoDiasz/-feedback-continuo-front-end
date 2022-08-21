import styled from "styled-components"

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100vh;
`

const SectionBanner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
  gap: 60px;
  background-color: ${props => props.typeTheme == "dark" ?  props.theme.colors.backgroundSecondary : props.theme.colors.primary};
  height: 100%;
  color: #fff;

  > div:first-child{
    width: 80%;
  }

  p {
    color: ${props => props.theme.colors.textGray};
    font-size: 24px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  img {
    align-self: center;
    width: 50%;
  }
`

const SectionForm = styled.section`
  width: 100%;
  display: grid;
  align-items: center;
  padding: 30px 0;
  background-color: ${props => props.theme.colors.background};

  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  > div:first-child {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    -webkit-box-shadow: ${props => props.typeTheme == "light" && "8px 8px rgba(235,235,235,0.6)"};
    -moz-box-shadow: ${props => props.typeTheme == "light" && "8px 8px rgba(235,235,235,0.6)"};
    box-shadow: ${props => props.typeTheme == "light" && "8px 8px rgba(235,235,235,0.6)"};
    border-radius: 8px;
    background-color: ${props => props.typeTheme == "light" && props.theme.colors.backgroundSecondary};
  }

  a:last-child{
    margin-bottom: 30px;
  }

  a {
    color: ${props => props.theme.colors.textGrayDark};
    margin: 20px 0 20px 0;

    span:last-child {
      color: ${props => props.theme.colors.primary};
    }
  
  }
 
`

export { DivContainer, SectionBanner, SectionForm }
