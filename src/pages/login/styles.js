import styled from "styled-components";
import { Form } from "formik";

export const FormDiv = styled(Form)`
    display: grid;
    margin: 0 auto;
    width: 100% ;
`; 

export const Label = styled.label`
    font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.colors.textGrayDark};
    
`;

