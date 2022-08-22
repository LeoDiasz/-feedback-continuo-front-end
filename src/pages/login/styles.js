import styled from "styled-components";
import { Form } from "formik";

export const FormDiv = styled(Form)`
    display: grid;
    margin: 0 auto;
    width: 100% ;
    
    >div:nth-child(2){
      position: relative;  
      
      button {
          position: absolute;
          bottom: 30px;
          right: 15px;
          border: none;
          background-color: transparent;
          font-size: 18px;
          color: ${props => props.theme.colors.textGrayMedio};

        :focus{
            outline: none;
        }
      }

    }
`;


