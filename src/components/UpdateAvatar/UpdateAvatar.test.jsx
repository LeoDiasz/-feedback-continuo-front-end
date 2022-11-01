import { render, screen } from "@testing-library/react";
import {UpdateAvatar} from "./index";
import {ThemeProvider} from "styled-components";

jest.mock("../../hooks/useUserContext", () => {
   return {
      useUserContext() {
        return {
          handleUpdateAvatar: jest.fn()
        }
      }
   }
 })

describe ('UpdateAvatar Component', () =>{
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
    render(
    <ThemeProvider theme={theme}>
      <UpdateAvatar/>
    </ThemeProvider>
    )
  }

 it ('esta renderizando corretamente' , () => {
   renderComponent()

   expect(screen.getByPlaceholderText("Digite seu e-mail")).toBeInTheDocument()
 })
 
 it("No input Avatar, aceitar somente tipos de imagens jpg e png", async () => {
   renderComponent();

   const input = screen.getByPlaceholderText("Digite seu e-mail")

   expect(input).toHaveAttribute("accept", "image/png, image/jpeg")
  
 })
})