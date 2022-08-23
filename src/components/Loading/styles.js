import styled from "styled-components";

export const DivLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  
  height: 100vh;
  top: 0px;
  width: 100vw;
  background-color: ${props => props.theme.colors.background};
`