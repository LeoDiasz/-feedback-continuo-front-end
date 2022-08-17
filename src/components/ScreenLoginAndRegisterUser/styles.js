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
  display: grid;
  align-items: center;
  padding: 30px 0;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #474748;
    margin-bottom: 30px;
  }

  > div:first-child {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 15px 30px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
    box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
    border-radius: 8px;
  }

  a:last-child{
    margin-bottom: 30px;
  }

  a {
    color: ${props => props.theme.colors.textGrayDark};
    margin: 20px 0 20px 0;

    span:last-child {
      color: ${props => props.theme.colors.blue};
    }
  
  }
 
`

export { DivContainer, SectionBanner, SectionForm }
