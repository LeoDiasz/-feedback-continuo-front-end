import {ListTagsContent} from "./styles"
import {TiDelete} from "react-icons/ti"

export const TagsList = ({listTags, setListTags, isNotShowDelete}) => {

  const handleDeleteTag = (idTag) => {
    const listTagFiltered = listTags.filter(tag => tag.idTag != idTag)

    setListTags(listTagFiltered)
  }

  return (
    <ListTagsContent>
       {listTags && listTags.map(({name, idTag}) => (
          <li key={idTag}>
            <span># {name.toUpperCase()}</span>
            {!isNotShowDelete && (
              <TiDelete onClick={() => handleDeleteTag(idTag)}/>
            )}
          </li>
      )) }
    </ListTagsContent>
  )
}
