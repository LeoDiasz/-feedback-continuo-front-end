import styled from "styled-components"

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;

    > section:first-child {
      display: none;
    }
  }

`

const SectionBanner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 100%;
  background-color: ${props => props.typeTheme == "dark" ?  props.theme.colors.backgroundSecondary : props.theme.colors.primary};

  > div:first-child{
    width: 80%;
    margin-bottom: 50px;

    > * + * {
      margin-top: 20px;
    }
  }

  p {
    color: ${props => props.theme.colors.textGray};
    font-size: 24px;
  }

  h1 {
    color: ${props => props.typeTheme == "light" && props.theme.colors.white};
    font-size: 40px;
  }

  img {
    align-self: center;
    width: 400px;
  }
`

const SectionForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: ${props => props.theme.colors.background};

  h1 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 600px;
    padding: 30px;
    border-radius: 8px;
    -webkit-box-shadow: ${props => props.typeTheme == "light" && "8px 8px rgba(235,235,235,0.6)"};
    -moz-box-shadow: ${props => props.typeTheme == "light" && "8px 8px rgba(235,235,235,0.6)"};
    box-shadow: ${props => props.typeTheme == "light" && "8px 8px rgba(235,235,235,0.6)"};
    background-color: ${props => props.typeTheme == "light" && props.theme.colors.backgroundSecondary};

    a:last-child {
      color: ${props => props.theme.colors.textGrayDark};
      margin-top: 25px;

      span:last-child {
        color: ${props => props.theme.colors.primary};
      }
    
    }
  }



  @media (max-width: 640px) {

    > div {
      width: 560px;

      div:last-child {

          button {
            height: 30px;
            font-size: 12px;
            width: 100%;
         }
      }
      
    }

   
  }

  @media (max-width: 576px) {

    > div {
      width: 90%;
      padding: 20px;
    }

    button, input, select{
      height: 25px;
    }

  
  }
  
`

export { DivContainer, SectionBanner, SectionForm }
