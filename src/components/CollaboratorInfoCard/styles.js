import styled from "styled-components"


export const CardContent = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.backgroundCard};
  -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
  box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
  transition: filter 0.2s;

  h4 {
    color: ${props => props.theme.colors.black}
  }
  p {
    margin-top: 2px;
    color: ${props => props.theme.colors.textGrayDark};
    font-size: 0.8rem;
  }

  &:hover {
    filter: brightness(0.95)
  }
` 