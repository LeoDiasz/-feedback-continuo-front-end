export const Pager = ({pages}) => {
  return (  
    <div>
      {Array.from(Array(pages), (item, index) => {
        return <button key={index}>{index+1}</button>
      })}
    </div>
  )
}