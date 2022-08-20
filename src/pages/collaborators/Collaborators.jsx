import { useState, useEffect } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import Pagination from '../../components/Pagination'
import { Input } from '../../components/InputStyles/styles'
import { Container } from '../../components/Container/styles'
import { ListCollaboratorsContent, SectionCollaboratorsContainer, Teste } from "./styles"

export const Collaborators = () => {
  const { listCollaborators, getListCollaborators } = useUserContext()
  const [isLoading, setIsLoading] = useState(true)
  const [searchCollaborator, setSearchCollaborator] = useState("")

  const setup = async () => {
    await getListCollaborators()

    setIsLoading(false)
  }

  useEffect(() => {
    setup()
  }, [])

  const filteredCollaborators = searchCollaborator.length > 0
    ? listCollaborators.filter(collaborator => collaborator.name.toLowerCase().includes(searchCollaborator.toLowerCase()))
    : []

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <Header />
      <SectionCollaboratorsContainer>
        <Container>
          <div>
            <h1>Colaboradores</h1>
            <span>{listCollaborators ? `${listCollaborators.length} colaboradores` : "nenhum colaborador"}</span>
          </div>

          <Input
            placeholder='Procure por um colaborador pelo nome'
            type="text"
            onChange={e => setSearchCollaborator(e.target.value)}
            value={searchCollaborator}
          />
       
            {/* <ListCollaboratorsContent>
              {searchUser.length > 0 ? (
                filteredCollaborators.map((collaborator, i) => (
                  <CollaboratorInfoCard key={i} datasCollaborator={collaborator} />
                ))
              ) : (
                listCollaborators.map((collaborator, i) => (
                  <CollaboratorInfoCard key={i} datasCollaborator={collaborator} />
                ))
              )}
            </ListCollaboratorsContent> */}
            
           <Pagination 
              searchUser={searchCollaborator} 
              filteredCollaborators={filteredCollaborators} 
              listCollaborators={listCollaborators}
            />

        </Container>
      </SectionCollaboratorsContainer>
    </>
  )
}
