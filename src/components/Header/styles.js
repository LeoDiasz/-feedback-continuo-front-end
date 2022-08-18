import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.blue};
  padding: 20px 0;

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
    color: #fff;
    font-weight: bold;

    + li {
      margin-left: 40px;
    }

    transition: color 0.2s;
    :hover {
      color: ${props => props.theme.colors.green}
    
    }
  }

  button:last-child {
    background-color: transparent;
    border: none;
  }


`

export const DivLogout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`