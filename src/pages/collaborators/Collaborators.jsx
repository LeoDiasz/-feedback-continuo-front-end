import {useState, useEffect} from 'react'
import { CollaboratorInfoCard } from '../../components/CollaboratorInfoCard'
import { Container } from '../../components/Container/styles'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { useUserContext } from '../../hooks/useUserContext'
import {ListCollaboratorsContent, SectionCollaboratorsContainer} from "./styles"

export const Collaborators = () => {
  const {listCollaborators, getListCollaborators} = useUserContext()
  const [isLoading, setIsLoading] = useState(true)

  const setup = async () => {
    await getListCollaborators()

    setIsLoading(false)
  }

  useEffect(() => {
    setup()
  }, [])

  if(isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <>
      <Header/>
      <section>
        <Container>
           <ListCollaboratorsContent>
            {listCollaborators && listCollaborators.map((collaborator, i) => (
              <CollaboratorInfoCard key={i} datasCollaborator={collaborator}/>
            ))}
           </ListCollaboratorsContent>
        </Container>
      </section>
    </>
  )
}
