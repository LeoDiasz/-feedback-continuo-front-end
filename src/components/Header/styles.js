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

  @media(max-width: 1350px) {
    > div {
        width: 95%;
    }
  }

  @media(max-width: 780px) {

    nav {
      gap: 20px;
      img {
        width: 80px;
      }

      li {
        font-size: 12px;
      }

      
    }

    > div > div img {
      width: 40px;
      height: 40px;
    }
  }


  @media(max-width: 576px) {

    nav {
      gap: 0;
    }

    > div > div {
      gap: 10px;
    }

    li {
      margin-left: 0;
    }
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
    height: 80%;
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

  
  @media(max-width: 780px) {
    :before {
      right: 90px;
    }
  }

  @media(max-width: 576px) {
    > div {
      height: 20px;
      right: 14px;
      width: 100%;
   
    }

    gap: 0;

    :before {
      display: none;
    }
  
  }
`

const SwitchStyle = styled(Switch)`
  
  > div {
    text-align: center;
  }
`

export {HeaderContainer, DivLogout, SwitchStyle}