import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useUserContext } from '../../hooks/useUserContext'
import { useFeedbackContext } from '../../hooks/useFeedbackContext'
import { useThemeContext } from '../../hooks/useThemeContext'
import { SuggestionUserCreateFeedback } from '../../components/SuggestionUserCreateFeedback'
import { CreateFeedbackSchema } from '../../utils/validationsSchema'
import { TagsList } from '../../components/TagsList'
import { Loading } from '../../components/Loading'
import { Container } from '../../components/Container/styles'
import { Label, InputField, DivTextValidation, TextValidation } from '../../components/InputStyles/styles'
import { Button } from '../../components/Button/styles'
import { Forms, InputAuto, ListCollaboratorsContent, SearchTagsContent, SectionContent } from './styles'
import { Footer } from '../../components/Footer'

export const CreateFeedback = () => {
  const { id } = useParams()
  const { getTagsServer, handleCreateFeedback, listTagsServer } = useFeedbackContext()
  const { getListCollaboratorsWithoutPages, listCollaboratorsPagesOff, collaborator, getDatasCollaboratorById } = useUserContext()
  const [isLoading, setIsLoading] = useState(true)
  const [idUserChooseForFeedback, setIdUserChooseForFeedback] = useState("")
  const [searchCollaboratorForFeedback, setSearchCollaboratorForFeedback] = useState("")
  const [collaboratorChoose, setCollaboratorChoose] = useState("")
  const [isClickInInputCollaborator, setIsClickInInputCollaborator] = useState(false)
  const [isClickInInputTags, setIsClickInInputTags] = useState(false)
  const [listTagsChoose, setListTagsChoose] = useState([])
  const [searchTags, setSearchTags] = useState("")
  const { title } = useThemeContext()

  const setup = async () => {

    if (id) {
      const datasCollaborator = await getDatasCollaboratorById(id)
      setCollaboratorChoose(datasCollaborator.name)
      setIdUserChooseForFeedback(datasCollaborator.idUser)
      setSearchCollaboratorForFeedback(datasCollaborator.name)
    }
    await getListCollaboratorsWithoutPages()
    await getTagsServer()
    setIsLoading(false)
  }

  const handleClickChooseCollaborator = (setFieldValue, name, idUser) => {

    if (name, idUser) {
      setSearchCollaboratorForFeedback(name)
      setCollaboratorChoose(name)
      setIdUserChooseForFeedback(idUser)
      setFieldValue("userFeedbackSend", name)
    }

    isClickInInputCollaborator ? setIsClickInInputCollaborator(false) : setIsClickInInputCollaborator(true)

  }

  const handleChangeChooseCollaborator = (setFieldValue, event) => {
    const valueInput = event.target.value

    if (valueInput !== collaboratorChoose) {
      setCollaboratorChoose("")
      setIdUserChooseForFeedback(0)

    }

    setFieldValue("userFeedbackSend", valueInput, false)
    setSearchCollaboratorForFeedback(valueInput)
  }

  const handleKeyDownCreateTag = (event) => {

    if (event.key !== "Enter") return

    event.preventDefault()
    const valueTag = event.target.value

    if (!valueTag.trim()) return

    const countAllTagsChoose = listTagsChoose.length + 1

    const tagCreate = { name: valueTag, idTag: countAllTagsChoose }

    setSearchTags("")
    setListTagsChoose([...listTagsChoose, tagCreate])
  }

  const handleChangeTags = (event) => {
    const valueFiltered = event.target.value.replace(/\s/, "")
    setSearchTags(valueFiltered)

  }

  const handleClickChooseTag = (tagName, event) => {

    if (tagName) {
      const countAllTagsChoose = listTagsChoose.length + 1

      const tagCreate = { name: tagName, idTag: countAllTagsChoose }
      setListTagsChoose([...listTagsChoose, tagCreate])
      setSearchTags("")
    }


    isClickInInputTags ? setIsClickInInputTags(false) : setIsClickInInputTags(true)
  }

  useEffect(() => {
    setup()
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  const filteredCollaborators = searchCollaboratorForFeedback.length > 0
    ? listCollaboratorsPagesOff.filter(collaborator => collaborator.name.toLowerCase().includes(searchCollaboratorForFeedback.toLowerCase()))
    : listCollaboratorsPagesOff

  const filteredTags = searchTags.length > 0
    ? listTagsServer.filter(tag => tag.name.toUpperCase().includes(searchTags.toUpperCase()))
    : listTagsServer

  return (
    <>
      <SectionContent>
        <Container>
          <div>
            <h1>Cadastrar feedbacks</h1>
          </div>
          <Formik
            initialValues={{
              message: '',
              anonymous: '',
              feedbackUserId: collaborator ? collaborator.idUser : '',
              userFeedbackSend: collaborator ? collaborator.name : '',
              tagsList: '',
            }}
            validationSchema={CreateFeedbackSchema}
            onSubmit={async (values, { resetForm }) => {
              const newValues = {
                message: values.message,
                anonymous: values.anonymous ? true : false,
                feedbackUserId: parseInt(idUserChooseForFeedback),
                tagsList: listTagsChoose,
              }

              const isResetForm = await handleCreateFeedback(newValues)

              if (isResetForm) {
                resetForm()
                setListTagsChoose([])
                setSearchCollaboratorForFeedback("")
              }
            }}
          >
            {({ errors, handleChange, values, setFieldValue, setFieldError }) => (
              <Forms typeTheme={title}>
                <div>
                  <Label htmlFor="userFeedbackSend">Para quem gostaria de enviar?</Label>
                  <InputAuto
                    type="text"
                    name="userFeedbackSend"
                    id="userFeedbackSend"
                    autoComplete="off"
                    onChange={(event) => handleChangeChooseCollaborator(setFieldValue, event)}
                    value={searchCollaboratorForFeedback}
                    onClick={() => handleClickChooseCollaborator(setFieldValue)}
                  />
                  <ListCollaboratorsContent>
                    {(isClickInInputCollaborator || searchCollaboratorForFeedback.length > 0) && !collaboratorChoose && filteredCollaborators && filteredCollaborators.map((collaborator) => (
                      <SuggestionUserCreateFeedback
                        onClick={() => handleClickChooseCollaborator(setFieldValue, collaborator.name, collaborator.idUser)}
                        key={collaborator.idUser}
                        datasCollaborator={collaborator}
                      />
                    ))}
                  </ListCollaboratorsContent>
                  <DivTextValidation>
                    <TextValidation id="id-message-collaborator">{errors.userFeedbackSend}</TextValidation>
                  </DivTextValidation>
                </div>

                <div>
                  <Label htmlFor="message">Feedback</Label>
                  <InputField
                    type="text"
                    name="message"
                    id="message"
                    placeholder='Digite o feedback que gostaria de enviar'
                    autoComplete="off"
                  />
                  <DivTextValidation>
                    <TextValidation id="id-message-feedback">{errors.message}</TextValidation>
                  </DivTextValidation>
                </div>

                <div>
                  <Label htmlFor="tags">Escolha as tags</Label>
                  <InputAuto
                    type="text"
                    name="tags"
                    id="tags"
                    onChange={handleChangeTags}
                    onClick={() => handleClickChooseTag()}
                    onKeyDown={handleKeyDownCreateTag}
                    value={searchTags}
                    autoComplete="off"
                  />
                  <SearchTagsContent>
                    {(isClickInInputTags || searchTags.length > 0) && filteredTags && filteredTags.map(({ idTag, name }) => (
                      <li key={idTag} onClick={() => handleClickChooseTag(name)}>
                        <p>{name}</p>
                      </li>
                    ))}
                  </SearchTagsContent>

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

                <TagsList
                  listTags={listTagsChoose}
                  setListTags={setListTagsChoose}
                />

                <Button type='submit' disabled={Object.values(errors).length > 0}>Criar</Button>
              </Forms>
            )}
          </Formik>
        </Container>
      </SectionContent>
      <Footer />
    </>
  )
}