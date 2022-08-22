import styled from "styled-components";

const SectionFeedbacksContent = styled.section`
    padding: 15px;
    border: 1px solid ${props => props.theme.colors.border};
    border-top: none;
    border-radius: 0 0 8px 8px;
    -webkit-box-shadow: ${props => props.typeTheme == "light" && "0px 0px 15px 0px rgba(166,166,166,0.41)"}; 
    box-shadow: ${props => props.typeTheme == "light" && "0px 0px 15px 0px rgba(166,166,166,0.41)"};
    background-color: ${props => props.theme.colors.backgroundSecondary};


    @media(max-width: 780px) {
        >ul > li {
            grid-template-columns: 1fr;
            min-height: 500px;
            gap: 20px;
            align-items: center;

            > * {
                width: 100%;
                justify-content: center;
                text-align: center;
            }
            
            > div:first-child {
                img {
                    width: 150px;
                    height: 150px;
                    margin-bottom: 20px;
                }

                h4 {
                    font-size: 20px;
                }

                p {
                    font-size: 16px;
                }
            }
            
            > div:nth-child(2) {
                padding: 0;
                
                > div p {
                    max-width: 100%;
                }
                > ul {
                    margin-top: 15px;
                    justify-content: center;
                }
            }

            > div:nth-child(3) {
                > div{
                    align-self: center;
                    margin-bottom: 40px;
                }
            }

            
           
        }
    }
`;

const Tabs = styled.div`   
    position: relative;
    display: flex;
    height: 60px;


`;

const ButtonTabs = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 50%;
    height: ${props => props.isUpHeight ? props.isUpHeight : '50px'};   
    background: ${props => props.isUpHeight ? props.theme.colors.backgroundSecondary: props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.border};     
    border-radius: 8px 8px 0 0; 
    font-weight: bold;
    font-size: 14px;
    color: ${props => props.isUpHeight ? props.theme.colors.title : "#9E9E9E"};

    cursor: pointer;

    :last-child {
        right: 0;
    }
    
    :hover {
        filter: brightness(0.96);
    }
`

export { SectionFeedbacksContent, Tabs, ButtonTabs }