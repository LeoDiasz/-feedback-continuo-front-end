import { useState, useEffect } from 'react'
import {FadeLoader} from "react-spinners"
import { useUserContext } from '../../hooks/useUserContext'
import { Loading } from '../../components/Loading'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/InputStyles/styles'
import { Container } from '../../components/Container/styles'
import { ListCollaboratorsContent, SectionCollaboratorsContainer } from "./styles"
import { useThemeContext } from '../../hooks/useThemeContext'

export const Collaborators = () => {
  const {colors} = useThemeContext()
  const [isLoading, setIsLoading] = useState(true)
  const [searchCollaborator, setSearchCollaborator] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const [showLoadingScroll, setShowLoadingScroll] = useState(true)
  const { 
    listCollaborators, 
    getListCollaborators, 
    listCollaboratorsPagesOff, 
    getListCollaboratorsWithoutPages, 
    setListCollaborators 
  } = useUserContext()

  const setup = async () => {
    setIsLoading(true)

    await getListCollaboratorsWithoutPages()
    await getListCollaborators(currentPage)

    setIsLoading(false)
  }

  const setupCollaboratorsPage = async () => {
    await getListCollaborators(currentPage)
    setShowLoadingScroll(false)
  }

  useEffect(() => {
    setup()
    
    console.log(listCollaborators)
    return () => setListCollaborators([])
  }, [])

  useEffect(() => {
    setupCollaboratorsPage()
  }, [currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {

      if(entries.some(entry => entry.isIntersecting)) {
        setShowLoadingScroll(true)
        setCurrentPage(currentPageInsideState => currentPageInsideState + 1)
      }

    })
    
    const sentinel = document.getElementById("sentinel")

    intersectionObserver.observe(sentinel)
    return () => intersectionObserver.disconnect(sentinel)
    
  }, [isLoading])

  const filteredCollaborators = searchCollaborator.length > 0
    ? listCollaboratorsPagesOff.filter(collaborator => collaborator.name.toLowerCase().includes(searchCollaborator.toLowerCase()))
    : listCollaboratorsPagesOff

  if (isLoading) {
    return (
      <>
        <Loading id="sentinel"/>
      </>
    )
  }

  return (
    <>
      <SectionCollaboratorsContainer>
        <Container>
          <div>
            <h1>Colaboradores</h1>
            <span>{listCollaboratorsPagesOff.length > 0 ? `${listCollaboratorsPagesOff.length} colaboradores` : "nenhum colaborador"}</span>
          </div>

          <Input
            placeholder='Procure por um colaborador pelo nome'
            type="text"
            onChange={e => setSearchCollaborator(e.target.value)}
            value={searchCollaborator}
          />
  
          <ListCollaboratorsContent>        
             {searchCollaborator.length > 0 ? (
                 filteredCollaborators && filteredCollaborators.map((collaborator, i) => (
                  <CollaboratorInfoCard key={i} datasCollaborator={collaborator} />
                ))
             ) : (
                listCollaborators && listCollaborators.map((collaborator, i) => (
                  <CollaboratorInfoCard key={i} datasCollaborator={collaborator} />
                ))
             )}
          </ListCollaboratorsContent>
          {showLoadingScroll && (
            <FadeLoader
              color={colors.primary}
              cssOverride={{}}
              loading
              size={15}
              speedMultiplier={2}
            />
          )}
        </Container>
      </SectionCollaboratorsContainer>
      <Footer id="sentinel"/>
    </>
  )
}
