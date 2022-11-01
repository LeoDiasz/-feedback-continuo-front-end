import { render, screen } from "@testing-library/react";
import {useState} from "react";
import {TagsList} from "./";
import {ThemeProvider} from "styled-components";
import { renderHook } from '@testing-library/react-hooks'

describe ('TagsList Component', () =>{
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

   const renderComponent = (isNotShowDelete) => {
      const {result} = renderHook(() => useState([{name: "react", idTag: 1}, {name: "javascript", idTag: 2}, {name: "html", idTag: 3}])) 
      
      render(
         <ThemeProvider theme={theme}>
            <TagsList listTags={result.current[0]} setListTags={result.current[1]} isNotShowDelete={isNotShowDelete}/>
         </ThemeProvider>
      )
   }

 it ('esta renderizando listagem' , () => {
   renderComponent()

   expect(screen.getByText(/REACT/)).toBeInTheDocument()
   expect(screen.getByText(/JAVASCRIPT/)).toBeInTheDocument()
   expect(screen.getByText(/HTML/)).toBeInTheDocument()
 })
 
 it("Ao adicionar a propriedade isNotShowDelete, não aparecer o icone de excluir tag", async () => {
   renderComponent(true);

   expect(screen.queryByTestId("testid-javascript")).not.toBeInTheDocument()

 })
})