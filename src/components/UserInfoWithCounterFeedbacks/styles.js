import styled from "styled-components"

const CardUser = styled.section`
  display: flex;

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

  small, p {
    color: ${props => props.theme.colors.textGrayDark};
  }

  p {
    margin: 5px 0;
    font-weight: bold;
  }

`

const DivFeedbacksCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  button {
    width: 100%;
    min-width: 40px; 
    gap: 20px;
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
const DivAvatarWithUpload = styled.div`
  position: relative;
  padding: 10px;

  img{
    padding: 5px;
    background-color: #fff;
  }
`

export {DivInfoText, CardUser, DivFeedbacksCounter, DivAvatarWithUpload }