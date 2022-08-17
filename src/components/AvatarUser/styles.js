import styled from "styled-components"

export const AvatarUserStyles = styled.img`
  width: ${props => props.width ? props.width : "100px"};
  height: ${props => props.width ? props.width : "100px"};
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.95)
  }
`