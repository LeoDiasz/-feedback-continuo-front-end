import { Form } from "formik";
import styled from "styled-components";

export const Forms = styled(Form)`
    margin: 50px auto;
    padding: 30px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;
`;