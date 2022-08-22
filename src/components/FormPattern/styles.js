import styled from "styled-components"
import {Form} from "formik"
 
export const FormPattern = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: ${props => props.width ? props.width : "100%"};
  padding: ${props => props.padding && props.padding};
  box-shadow: ${props => props.typeTheme == "light" && "0px 0px 15px 0px rgba(166,166,166,0.41)"};
  -webkit-box-shadow: ${props => props.typeTheme == "light" && "0px 0px 15px 0px rgba(166,166,166,0.41)"}; 
  background-color: ${props => props.theme.colors.backgroundSecondary};

  > div {
    width: 100%;
  }

`