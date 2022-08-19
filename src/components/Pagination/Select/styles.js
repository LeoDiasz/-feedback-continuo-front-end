import styled from "styled-components";

export const SelectPagination = styled.select`
    width: 50px;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 6px;
    margin-top: 10px;

`

export const SelectContent = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 12px;
        padding-right: 10px;
    }
`