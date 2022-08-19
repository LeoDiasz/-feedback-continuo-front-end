import styled from "styled-components"

const LogoContent = styled.img`
  width: ${props => props.width ? props.width : "150px"};

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.95)
  }
  
`

export default LogoContent