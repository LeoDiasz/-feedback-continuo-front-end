import styled from "styled-components"

const CardUser = styled.section`
    display: flex;
    width: 100%;

  > div {
    display: flex;
    justify-self: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    width: 75%;

    img {
      position: relative;

    }
  }

  
`

const DivInfoText = styled.div`
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.black}
  }

  small, p {
    color: ${props => props.theme.colors.textGrayDark};
  }

  p {
    margin-top: 4px;
    margin-bottom: 5px;
    font-weight: bold;
  }

`

const DivFeedbacksCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    min-width: 40px; 
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    
    > span {
      border-radius: 50%;
      padding: 5px 10px;
      color: ${props => props.theme.colors.black};
      background-color: #fff;
    }
  }

  button + button {
    margin-top: 15px;
  }
`

export {DivInfoText, CardUser, DivFeedbacksCount}