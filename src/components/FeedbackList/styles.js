import styled from "styled-components";

export const Feedbackscontent = styled.ul`

    > li + li {
        margin-top: 15px;
    }

    > h3 {
        text-align: center;
        margin: 20px 0px;
    }

    > div:last-child {
        display: flex;
        padding: 20px 0;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: relative;

        > div {
            margin-left: 5px;
            display: flex;
            align-items: center;
            gap: 20px;

            button {
                width: 40px;
                height: 20px;
            }
        }

        span {
            font-weight: bold;
            padding-right: 10px;
            right: 0px;
            position: absolute;
            font-size: 14px;
            color: ${props => props.theme.colors.textGrayDark}
        }
       
    }
`