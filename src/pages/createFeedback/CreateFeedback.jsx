import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { Container } from '../../components/Container/styles'
import { Label, InputField } from '../../components/InputStyles/styles'
import { Button } from '../../components/Button/styles'
import { Forms, InputAuto, ListCollaboratorsContent, SearchTagsContent, SectionContent } from './styles'
import { TagsList } from '../../components/TagsList'
import { SuggestionUserCreateFeedback } from '../../components/SuggestionUserCreateFeedback'


export const CreateFeedback = () => {
  const { getListCollaboratorsWithoutPages, getListCollaborators, user, listCollaboratorsPagesOff } = useUserContext()
  const [isLoading, setIsLoading] = useState(true)
  const [idUserChooseForFeedback, setIdUserChooseForFeedback] = useState("")
  const [searchUserForFeedback , setSearchUserForFeedback] = useState("")
  const [isChooseUser, setIsChooseUser] = useState(true)
  const [listTagsChoose, setListTagsChoose] = useState([])
  const [searchTags, setSearchTags] = useState("")
  
  const {
    getTagsServer,
    getFeedbacksUser,
    handleCreateFeedback,
    listTagsServer
  } = useFeedbackContext()

  const setup = async () => {
    await getListCollaboratorsWithoutPages()
    getListCollaborators()
    await getTagsServer()
    await getFeedbacksUser("receveid", user.idUser)
    await getFeedbacksUser("gived", user.idUser)
    setIsLoading(false)
  }

  const handleChooseUserForFeedback = (name, idUser) => {
    setSearchUserForFeedback(name)
    setIdUserChooseForFeedback(idUser)

    isChooseUser ? setIsChooseUser(false) : setIsChooseUser(true)

    console.log(name, idUser)
  }

  const handleChooseTags = (tagName) => {

    const countAllTagsChoose = listTagsChoose.length + 1

    const tagCreate = {name: tagName, idTag: countAllTagsChoose}
    setListTagsChoose([...listTagsChoose, tagCreate])
  }

  const handleKeyDownCreateTag = (event) => {
    if (event.key !== "Enter") return

    event.preventDefault()
    const valueTag = event.target.value

    if(!valueTag.trim()) return

    const countAllTagsChoose = listTagsChoose.length + 1

    const tagCreate = {name: valueTag, idTag: countAllTagsChoose}

    setSearchTags("")
    setListTagsChoose([...listTagsChoose, tagCreate ])
  }
  
  const handleChangeTags = (event) => {
  
    const valueFiltered = event.target.value.replace(/\s/,"")
    setSearchTags(valueFiltered)

  }

  useEffect(() => {
    setup()
  }, [])

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  const filteredCollaborators = searchUserForFeedback.length > 0 
  ? listCollaboratorsPagesOff.filter(collaborator => collaborator.name.toLowerCase().includes(searchUserForFeedback.toLowerCase())) 
  : []

  const filteredTags = searchTags.length > 0 
  ?  listTagsServer.filter(tag => tag.name.toUpperCase().includes(searchTags.toUpperCase())) 
  : []

  return (
    <>
      <Header />
      <SectionContent>
     <Container>
        <Formik
          initialValues={{
            message: '',
            anonymous: '',
            feedbackUserId: '',
            tagsList: '',
          }}
          onSubmit={values => {
            const newValues = {
              message: values.message,
              anonymous: values.anonymous ? values.anonymous : false,
              feedbackUserId: parseInt(idUserChooseForFeedback),
              tagsList: listTagsChoose,
            }
    
            handleCreateFeedback(newValues)
          }}
        >
          {({ errors, handleChange, values}) => (
            <Forms>
              <div>
                <Label htmlFor="userFeedbackSend">Para quem gostaria de enviar?</Label>
                <InputAuto
                  type="text"
                  name="userFeedbackSend"
                  id="userFeedbackSend"
                  onChange={e => setSearchUserForFeedback(e.target.value)}
                  value={searchUserForFeedback}
                  onClick={() => setSearchUserForFeedback(" ")}
                />
                <ListCollaboratorsContent>
                  {searchUserForFeedback.length > 0 && isChooseUser && (
                    filteredCollaborators.map((collaborator) => (
                      <p onClick={() => handleChooseUserForFeedback(collaborator.name, collaborator.idUser)}>
                        <SuggestionUserCreateFeedback
                          key={collaborator.idUser} 
                          datasCollaborator={collaborator}
                        />
                      </p>
                    ))
                  )}
                </ListCollaboratorsContent>
              </div>
             
              <div>
                <Label htmlFor="message">Feedback</Label>
                <InputField 
                  type="text" 
                  name="message" 
                  id="message" 
                  placeholder='Digite o feedback que gostaria de enviar' 
                 />
              </div>

              <div>
                <Label htmlFor="tags">Escolha as tags</Label>
                <InputAuto
                  type="text"
                  name="tags"
                  id="tags"
                  onChange={handleChangeTags}
                  onKeyDown={handleKeyDownCreateTag}
                  value={searchTags}
                />
                <SearchTagsContent>
                  {searchTags.length > 0 && filteredTags.map(({ idTag, name }) =>
                    <li key={idTag} onClick={() => handleChooseTags(name)}>
                      <p>{name}</p>
                    </li>
                  )}
                  </SearchTagsContent>
                <TagsList 
                  listTags={listTagsChoose} 
                  setListTags={setListTagsChoose}
                  />
              </div>

              <div>
                <Label htmlFor="message">Quer deixar feedback anonimo</Label>
                <input 
                  type="checkbox" 
                  name="anonymous" 
                  id="anonymous" 
                  onChange={handleChange} 
                  value={values.anonymous}
                />
              </div>
              <Button type='submit'>Criar</Button>
            </Forms>
          )}
        </Formik>
        </Container>
      </SectionContent>
    </>


  )
}