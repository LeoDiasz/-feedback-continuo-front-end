import styled from "styled-components"
import Switch from 'react-switch'

const HeaderContainer = styled.header`
  background-color: ${props => props.themeDark.title == "dark" ? props.theme.colors.backgroundSecondary : props.theme.colors.primary };
  padding: 15px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 40px;
    }
  }

  nav, ul {
    display: flex;
    align-items: center;
  }

  nav {
    gap: 80px;
  }

  li {
    color: ${props => props.theme.colors.white};
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
    background-color: ${props => props.theme.colors.secondary};
    border: none;
  }
`

const DivLogout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 20px;
  position: relative;

  :before {
    content: "";
    height: 100%;
    position: absolute;
    right: 108px;
    border-left: 1px solid ${props => props.theme.colors.border};
  } 

  >div{
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 8px;
    width: 90px;
    height: 50px;
    top: 52px;
    right: 4px;
    z-index: 1;
        
  }
  
  > button:last-child {
    display: flex;
    align-items: center;
    gap: 5px;
    background: transparent;
    font-size: 25px;
    color: ${props => props.theme.colors.white}
  }
`

const SwitchStyle = styled(Switch)`
  
  > div {
    text-align: center;
  }
`

export {HeaderContainer, DivLogout, SwitchStyle}