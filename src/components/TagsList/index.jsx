import {TiDelete} from "react-icons/ti"
import {ListTagsContent} from "./styles"

export const TagsList = ({listTags, setListTags, isNotShowDelete}) => {

  const handleDeleteTag = (idTag) => {
    const listTagFiltered = listTags.filter(tag => tag.idTag != idTag)

    setListTags(listTagFiltered)
  }

  return (
    <ListTagsContent>
       {listTags && listTags.map(({name, idTag}, i) => (
          <li key={i}>
            <span># {name.toUpperCase()}</span>
            {!isNotShowDelete && (
              <TiDelete onClick={() => handleDeleteTag(idTag)} data-testid={`testid-${name}`}/>
            )}
          </li>
      ))}
    </ListTagsContent>
  )
}
