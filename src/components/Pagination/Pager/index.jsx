import { PagerPagination } from "./styles"

export const Pager = ({ pages, setAtualPage }) => {
  return (
    <div>
        {Array.from(Array(pages), (item, index) => {
            return <PagerPagination
            key={index}
            value={index}
            onClick={(e) => setAtualPage(e.target.value)}
            
            >{index + 1}</PagerPagination>
        })}
    </div>
  )
}