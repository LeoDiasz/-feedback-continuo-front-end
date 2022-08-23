import styled from "styled-components"


export const DivNotFound = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      justify-content: center;
      width: 50%;
      height: 50%;
      background-color: ${props => props.theme.colors.backgroundSecondary};

      button {
        width: 80%;
      }
  }
`

