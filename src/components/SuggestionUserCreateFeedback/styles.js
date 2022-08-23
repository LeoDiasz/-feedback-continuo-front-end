import styled from "styled-components";

export const ListContent = styled.li`
    height: 25px;
    color: ${props => props.theme.colors.textGrayDark};
    font-size: 12px;
    padding: 5px 0 0 10px;
    transition: filter 0.3s;
    cursor: pointer;

    :hover {
        filter: brightness(0.90);
    }
`