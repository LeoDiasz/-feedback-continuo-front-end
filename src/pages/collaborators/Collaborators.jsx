import { useState, useEffect } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { Loading } from '../../components/Loading'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/InputStyles/styles'
import { Container } from '../../components/Container/styles'
import { ListCollaboratorsContent, SectionCollaboratorsContainer } from "./styles"

export const Collaborators = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchCollaborator, setSearchCollaborator] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

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

    setIsLoading(false)
  }

  const setupCollaboratorsPage = async () => {
    await getListCollaborators(currentPage)
  }

  useEffect(() => {
    setup()
    
    return () => setListCollaborators([])
  }, [])

  useEffect(() => {
    setupCollaboratorsPage(currentPage)
  }, [currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {

      if(entries.some(entry => entry.isIntersecting)) {
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
        </Container>
      </SectionCollaboratorsContainer>
      <Footer id="sentinel"/>
    </>
  )
}
