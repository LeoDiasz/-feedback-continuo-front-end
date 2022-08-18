import styled from "styled-components"

export const ListTagsContent = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background-color: ${props => props.theme.colors.blue};
    padding: 5px 10px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    position: relative;
    transition: filter 0.3s;

    :hover {
      filter: brightness(0.94);
    }

    * {
      font-size: 20px;
      color: #fff;
    }

    span {
      font-size: 12px;
    }
  }
`