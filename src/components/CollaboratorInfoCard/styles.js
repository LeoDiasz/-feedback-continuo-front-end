import styled from "styled-components"


export const CardContent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  -webkit-box-shadow: ${props => props.typeTheme == "dark" || props.shadow ? 0 : "0px 0px 15px 0px rgba(166,166,166,0.41)"}; 
  box-shadow: ${props => props.typeTheme == "dark" || props.shadow ? 0 : "0px 0px 15px 0px rgba(166,166,166,0.41)"};
  transition: filter 0.2s;

  > div {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  
  p {
    margin-top: 6px;
    color: ${props => props.theme.colors.textGrayDark};
    font-size: 0.8rem;
  }

  &:hover {
    filter: brightness(0.95)
  }
` 