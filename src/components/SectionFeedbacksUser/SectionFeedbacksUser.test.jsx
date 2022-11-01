import { render, screen } from "@testing-library/react";
import {SectionFeedbacksUser} from "./"
import {ThemeProvider} from "styled-components";

jest.mock("../../hooks/useFeedbackContext", () => {
  return {
    useFeedbackContext() {
      return {
        setCurrentPage: 0
      }
    }
  }
})

describe ('SectionFeedbacksUser Component', () =>{
  const theme = {
    title: "dark",
    colors: {
      primary: "#1166d9",
      secondary: "#48BD82",
      title: "#C6C9D2",
      textGray: "#C6C9D2",
      textGrayMiddle: "#9FA2B4",
      textGrayDark: "#F0F6FC",
      error: "#F12B2C",
      inputBorder: "#F0F1F7",
      border: "#C9D1D9",
      black: "#292929",
      backgroundCard: "#FCFDFE",
      background: "#22272E",
      backgroundSecondary: "#2D333B",
      backgroundInput: "#22272E",
      white: "#F2F2F2",
    }
  };

  const renderComponent = () => {
    const listFeedbacksReceveid = []
    const listFeedbacksSend = []

    render(
      <ThemeProvider theme={theme}>
        <SectionFeedbacksUser listFeedbacksReceveid={listFeedbacksReceveid}  listFeedbacksSend={listFeedbacksSend}/>
      </ThemeProvider>
    )
  }

 it ('esta Exibindo na tela o botão de tabs Feedbacks recebidos e Feedbacks enviados' , () => {
   renderComponent();

   expect(screen.getByText(/Feedback Enviados/)).toBeInTheDocument();
   expect(screen.getByText(/Feedback Recebidos/)).toBeInTheDocument();
 })
 
})