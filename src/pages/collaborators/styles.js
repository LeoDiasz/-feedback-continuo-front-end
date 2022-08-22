import styled from "styled-components"

const SectionCollaboratorsContainer =  styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  
  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 60px 0;

    > *:last-child {
      align-self: center;
    }

    > div {    
        h1 {
          margin-bottom: 5px;
        }

        span {
          font-size: 0.9rem;
          color: ${props => props.theme.colors.textGrayDark}
        }
    }
    

    @media(max-width: 1400px) {
      width: 95%;
      
      text-align: center;
    }

   
  }
`

const ListCollaboratorsContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media(max-width: 780px) {
     
   li {
      padding: 40px 20px;
      min-height: 400px;
      flex-direction: column;
      justify-content: center;
      gap: 60px;

      > div:first-child {
        flex-direction: column; 
        text-align: center;
        width: 100%;
        gap: 15px;

          img {
            margin-bottom: 30px;
            width: 120px;
            height: 120px;   
          }
       

      }
    }

  }


  @media(max-width: 576px) {

    div:last-child { 
      width: 100%;
      gap: 15px;

    }

    button {
      height: 40px;
      width: 50%;
      font-size: 13px;
    }

  }
`

export {ListCollaboratorsContent, SectionCollaboratorsContainer}