import {IoMdArrowRoundForward, IoMdArrowRoundBack} from "react-icons/io"
import { Button } from "../../Button/styles"

export const Pager = ({pages, setCurrentPage, currentPage}) => {

  return (  
    <div>
        <div>
          {currentPage > 0  && 
            <Button onClick={() => setCurrentPage(currentPage - 1)}> 
              <IoMdArrowRoundBack/>
            </Button>}
          {currentPage + 1 !== pages && 
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              <IoMdArrowRoundForward/>
            </Button>
          }
        </div>
        <span>{currentPage + 1}/{pages}</span>
    </div>
  )
}