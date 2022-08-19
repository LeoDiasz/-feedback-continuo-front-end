import styled from "styled-components"
import {Form} from "formik"
 
export const FormPattern = styled(Form)`
  width: ${props => props.width ? props.width : "100%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41); 
  box-shadow: 0px 0px 15px 0px rgba(166,166,166,0.41);
  border-radius: 8px;
  background-color: #fff;
`