import styled from "styled-components"

export const FooterContent = styled.footer`
  background-color: ${props => props.typeTheme == "dark" ? props.theme.colors.backgroundSecondary : props.theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 10px;

`