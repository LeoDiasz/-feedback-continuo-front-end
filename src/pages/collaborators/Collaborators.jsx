import { useState, useEffect } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { Input } from '../../components/InputStyles/styles'
import { Container } from '../../components/Container/styles'
import { ListCollaboratorsContent, SectionCollaboratorsContainer, Teste } from "./styles"
import { Footer } from '../../components/Footer'

export const Collaborators = () => {
  const { listCollaborators, getListCollaborators, listCollaboratorsPagesOff, getListCollaboratorsWithoutPages, setListCollaborators } = useUserContext()
  const [isLoading, setIsLoading] = useState(true)
  const [searchCollaborator, setSearchCollaborator] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

  const setup = async () => {
    await getListCollaborators(currentPage)

    setIsLoading(false)
  }

  useEffect(() => {
    getListCollaboratorsWithoutPages()

    return () => setListCollaborators([])
  }, [])

  useEffect(() => {
    setup()
   
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
      <Header />
      <SectionCollaboratorsContainer>
        <Container>
          <div>
            <h1>Colaboradores</h1>
            <span>{listCollaboratorsPagesOff ? `${listCollaboratorsPagesOff.length} colaboradores` : "nenhum colaborador"}</span>
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
