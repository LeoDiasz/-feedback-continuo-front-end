import styled from "styled-components"

const SectionCollaboratorsContainer =  styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundLight};
  
  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 60px 0;

    > div {
        h1 {
          color: ${props => props.theme.colors.black};
          margin-bottom: 5px;
        }

        span {
          font-size: 0.9rem;
          color: ${props => props.theme.colors.textGrayDark}
        }
    }
    
  }
`

const ListCollaboratorsContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export {ListCollaboratorsContent, SectionCollaboratorsContainer}