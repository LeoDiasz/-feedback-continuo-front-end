export const Pager = ({pages, setCurrentPage}) => {
  return (  
    <div>
      {Array.from(Array(pages), (item, index) => {
        return <button 
        key={index}
        value={index}
        onClick={(e)=> setCurrentPage(e.target.value) }
        >{index+1}</button>
      })}
    </div>
  )
}