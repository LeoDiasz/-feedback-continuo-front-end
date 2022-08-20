import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 15px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav, ul {
    display: flex;
    align-items: center;
  }

  nav {
    gap: 80px;
  }

  li {
    color: ${props => props.theme.colors.backgroundLight};
    font-weight: bold;
    padding: 5px 15px;

    + li {
      margin-left: 20px;
    }

    transition: color 0.2s;

    :hover {
      border-radius: 4px;
      color: ${props => props.theme.colors.secondary}
    }
  }

  button:last-child {
    background-color: transparent;
    border: none;
  }


`

const DivLogout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export {HeaderContainer, DivLogout}