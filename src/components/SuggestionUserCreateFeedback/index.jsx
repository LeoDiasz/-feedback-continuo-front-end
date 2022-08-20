import { ListContent } from "./styles"

export const SuggestionUserCreateFeedback = ( {datasCollaborator, onClick} ) => {

  return (
        <ListContent onClick={onClick}>{datasCollaborator ? datasCollaborator.name : ""}</ListContent>
    
  )
}