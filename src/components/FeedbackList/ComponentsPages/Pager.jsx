import { Button } from "../../Button/styles"
import {AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

export const Pager = ({pages, setCurrentPage, currentPage}) => {
  console.log(pages)
  console.log(currentPage)
  return (  
    <div>
        <div>
          {currentPage > 0  && 
            <Button onClick={() => setCurrentPage(currentPage - 1)}> 
              <AiOutlineArrowLeft/>
            </Button>}
          {currentPage + 1 !== pages && 
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              <AiOutlineArrowRight/>
            </Button>
          }
        <span>{currentPage + 1}/{pages}</span>
        </div>
    </div>
  )
}