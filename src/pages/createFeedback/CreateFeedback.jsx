import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { Container } from '../../components/Container/styles'
import { Label, InputField } from '../../components/InputStyles/styles'
import { Button } from '../../components/Button/styles'
import { Forms, InputAuto, ListCollaboratorsContent, SearchTagsContent } from './styles'
import { TagsList } from '../../components/TagsList'

export const CreateFeedback = () => {
  const { getListCollaborators, user } = useUserContext()
  const {listCollaborators} = useUserContext()
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
    listFeedbacksReceveid,
    listFeedbacksSend,
    listTagsServer
  } = useFeedbackContext()

  const setup = async () => {
    await getListCollaborators()
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
  
  useEffect(() => {
    setup()
  }, [])

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  const filteredCollaborators = searchUserForFeedback.length > 0 
  ? listCollaborators.filter(collaborator => collaborator.name.toLowerCase().includes(searchUserForFeedback.toLowerCase())) 
  : []

  const filteredTags = searchTags.length > 0 
  ?  listTagsServer.filter(tag => tag.name.toUpperCase().includes(searchTags.toUpperCase())) 
  : []

  return (
    <>
      <Header />
      <Container>
        <Formik
          initialValues={{
            message: '',
            anonymous: '',
            feedbackIdUser: '',
            tagsList: '',
          }}
          onSubmit={values => {

            const newValues = {
              message: values.message,
              anonymous: values.anonymous,
              feedbackIdUser: parseInt(idUserChooseForFeedback),
              tagsList: listTagsChoose,
            }
            console.log(newValues)
            // handleCreateFeedback(newValues)
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
                      <button onClick={() => handleChooseUserForFeedback(collaborator.name, collaborator.idUser)}>
                        <CollaboratorInfoCard  
                          key={collaborator.idUser} 
                          datasCollaborator={collaborator}
                          notIsNavigate
                          shadowNone
                        />
                      </button>
                    ))
                  )}
                </ListCollaboratorsContent>
              </div>
             
              <div>
                <Label htmlFor="message">Feedback</Label>
                <InputField type="text" name="message" id="message" placeholder='Digite o feedback que gostaria de enviar' />
              </div>

              <div>
                <Label htmlFor="tags">Escolha as tags</Label>
                <InputAuto
                  type="text"
                  name="tags"
                  id="tags"
                  onChange={e => setSearchTags(e.target.value)}
                  value={searchTags}
                />
                <SearchTagsContent>
                  {searchTags.length > 0 && filteredTags.map(({ idTag, name }) =>
                    <li key={idTag} onClick={() => handleChooseTags(name)}>
                      <p>{name}</p>
                    </li>
                  )}
                </SearchTagsContent>
                <TagsList listTags={listTagsChoose} setListTags={setListTagsChoose}/>
              </div>

              <div>
                <Label htmlFor="message">Quer deixar feedback anonimo</Label>
                <input type="checkbox" name="anonymous" id="anonymous" onChange={handleChange} value={values.anonymous}/>
              </div>
              <Button type='submit' backgroundColor="#7FC754">Criar</Button>
            </Forms>
          )}
        </Formik>
      </Container>
    </>


  )
}