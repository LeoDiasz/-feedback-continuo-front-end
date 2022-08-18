import { Form, Field } from "formik";
import styled from "styled-components";

export const Forms = styled(Form)`
    position: relative;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;

    nav {
        position: absolute;
        background: #FFFFFF;
        width: 500px;
        border-radius: 8px;
    }

    nav>ul>li {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: ${props => props.theme.colors.textGrayDark};
        background-color: #FFFFFF;
        border: 1px solid ${props => props.theme.colors.textGray};
        border-radius: 8px;
        margin-top: 4px;
        padding: 4px 8px;
        cursor: pointer;
    }

    li img {
        width: 40px;
        height: 40px;
    }

    li p {
        padding: 0 15px;
        border-right: 1px solid ${props => props.theme.colors.textGray};
    }

    li p:last-child{
        border: none;
    }
`;

export const InputAuto = styled(Field)`
    width: 100%;
    min-height: 40px;
    padding: 0 20px;
    border-radius: 8px;
    margin-top: 8px;
    border: 1px solid ${props => props.theme.colors.textGray};
    color: ${props => props.theme.colors.textGrayDark};

    &::placeholder {
        color: ${props => props.theme.colors.textGray};
    }
    
    &:focus {
        outline: none;
    }
    
`   