import { render, screen } from "@testing-library/react";
import {Logo} from "./index";

const mockHistory = jest.fn()
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
 })

jest.mock("../../hooks/useAuthContext", () => {
   return {
      useAuthContext() {
         return {
            isLogged: true
         }
      }
   }
})

const renderComponent = () => {
   render(<Logo/>)
}

describe ('Logo Component', () =>{

 it ('esta renderizando corretamente' , () => {
   renderComponent()

   expect(screen.getByAltText("logo")).toBeInTheDocument()
 })
 
 it("Ao estar logado, espera que a ancora tenha o atributo /home", async () => {
   renderComponent();

   const link = screen.getByRole("link");

   expect(link).toHaveAttribute("href", "/home");

 })
})