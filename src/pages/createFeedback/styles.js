import {Field } from "formik";
import styled from "styled-components";
import { FormPattern } from "../../components/FormPattern/styles";

const SectionContent = styled.section`
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 60px 0;

        > div {
            text-align: center;
            
            h1 {
                cursor: pointer;
                transition: color 0.3s;

                :hover {
                    color: ${props => props.theme.colors.primary};
                }
            }
        }  
    }
`

const Forms = styled(FormPattern)`
    padding: 30px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;
    width: 90%;

    >div:first-child {
        position: relative;
        
    }

    > div:nth-child(3) {
        position: relative;
    }

    > div {
        width: 100%;
    }

    > div:nth-child(4){
        display: flex;
        padding: 10px 0;
        gap: 10px;    
        
        input {
            transform: scale(1.2);
        }
    }

`;

const SearchTagsContent = styled.ul`
    position: absolute;
    background-color: #FFFFFF;
    display: flex;
    max-height: 110px;
    flex-direction: column;
    padding-bottom: 5px;
    width: 100%;
    z-index: 1;
    overflow-y: auto;

    li {
        color: ${props => props.theme.colors.textGrayDark};
        font-size: 12px;
        padding: 5px 0 0 10px;
        font-size: 10px;
        transition: filter 0.3s;
        cursor: pointer;

        :hover {
            filter: brightness(0.90);
        }
    }
`

const InputAuto = styled(Field)`
    width: 100%;
    min-height: 40px;
    padding: 0 20px;
    border-radius: 8px;
    margin-top: 8px;
    border: 1px solid ${props => props.theme.colors.textGray};
    color: ${props => props.theme.colors.textGrayDark};
    background-color: ${props => props.theme.colors.backgroundInput};

    &::placeholder {
        color: ${props => props.theme.colors.textGray};
    }
    
    &:focus {
        outline: none;
    }

    @media (max-width: 576px) {
        height: 25px;
    }
    
`

const ListCollaboratorsContent = styled.ul`
        position: absolute;
        background: #FFFFFF;
        width: 100%;
        max-height: 150px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1;
        overflow-y: auto;
`

export { InputAuto, ListCollaboratorsContent, Forms, SearchTagsContent, SectionContent }