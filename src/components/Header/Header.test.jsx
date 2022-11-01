import {render, screen, waitFor} from "@testing-library/react";
import user from "@testing-library/user-event";
import { Header } from ".";
import {ThemeProvider} from "styled-components";

jest.mock('../../hooks/useThemeContext', () => {
  return {
    useThemeContext() {
      return {
        colors: {
          primary: "#1166d9",
          secondary: "#48BD82",
          title: "#292929",
          textGray: "#C6C9D2",
          textGrayMiddle: "#9FA2B4",
          textGrayDark: "#4B506D",
          error: "#F12B2C",
          inputBorder: "#F0F1F7",
          border: "#DFE0EB",
          black: "#292929",
          backgroundCard: "#FCFDFE",
          background: "#F2F2F2",
          backgroundSecondary: "#fff",
          backgroundInput: "#fff",
          white: "#F2F2F2",
        }
      }
    }
  }
});

jest.mock("../../hooks/useUserContext", () => {
  return {
    useUserContext() {
      return {
        user: null
      }
    }
  }
});

jest.mock("../../hooks/useAuthContext", () => {
  return {
    useAuthContext() {
      return {
        signOut: jest.fn()
      }
    }
  }
});

jest.mock("react-router-dom", () => {
  const Link = (props) => (
    <a
      href={props.to}
      onClick={(e) => {
        e.preventDefault()
        mockHistory(props.to)
      }}
    >
      {props.children}
    </a>
  )
  return {Link}
});

describe("Header component", () => {
  
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

  const renderComponent = () => (
    render(
      <ThemeProvider theme={theme}>
        <Header theme={theme} />
      </ThemeProvider>
    )
  );
  
  it("Esta renderizando corretamente os links colaboradores e enviar Feedback", () => {
    renderComponent()

    expect(screen.getByText("Colaboradores")).toBeInTheDocument()
    expect(screen.getByText("Enviar feedback")).toBeInTheDocument()
  });

  it("Ao estar logado, aparece o botão sair ao clicar no avatar", async () => {

    renderComponent()
    
    const buttonAvatar = screen.getByRole("button")
    expect(buttonAvatar).toBeInTheDocument()

    user.click(buttonAvatar)
    
    await waitFor(() => {
      expect(screen.getByText("Sair")).toBeInTheDocument()
    })
  });

})