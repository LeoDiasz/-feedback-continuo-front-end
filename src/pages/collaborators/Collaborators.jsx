import { useState, useEffect } from 'react'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Container } from '../../components/Container/styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/InputStyles/styles'
import { Loading } from '../../components/Loading'
import Pagination from '../../components/Pagination'
import { useUserContext } from '../../hooks/useUserContext'
import { ListCollaboratorsContent, SectionCollaboratorsContainer, Teste } from "./styles"

export const Collaborators = () => {
  const { listCollaborators, getListCollaborators } = useUserContext()
  const [isLoading, setIsLoading] = useState(true)
  const [searchUser, setSearchUser] = useState("")

  const setup = async () => {
    await getListCollaborators()

    setIsLoading(false)
  }

  useEffect(() => {
    setup()
  }, [])

  const filteredCollaborators = searchUser.length > 0
    ? listCollaborators.filter(collaborator => collaborator.name.toLowerCase().includes(searchUser.toLowerCase()))
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
            onChange={e => setSearchUser(e.target.value)}
            value={searchUser}
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
            
           <Pagination searchUser={searchUser} filteredCollaborators={filteredCollaborators} listCollaborators={listCollaborators}/>
        
        </Container>
      </SectionCollaboratorsContainer>
    </>
  )
}
