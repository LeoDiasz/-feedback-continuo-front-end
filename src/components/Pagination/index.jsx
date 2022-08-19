import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { ListCollaboratorsContent } from "../../pages/collaborators/styles";
import { CollaboratorInfoCard } from "../CollaboratorInfoCard";
import { Loading } from "../Loading";
import { Pager } from "./Pager";
import { Select } from "./Select";
import { PaginationContent } from "./styles";

const Pagination = ({ searchUser, filteredCollaborators, listCollaborators }) => {

    const { setUsersPerPage, setAtualPage, pages, atualPage, usersPerPage, getListCollaborators } = useUserContext()
    const [loading, setLoading] = useState(true)

    const setup = async () => {
        await getListCollaborators()
        setLoading(false)
    }

    useEffect(() => {
        setup()
    }, [])

    useEffect(() => {
        setAtualPage(0)
    }, [usersPerPage])

    useEffect(() => {
        getListCollaborators()
    }, [atualPage])


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <PaginationContent>
                <Pager pages={pages} setAtualPage={setAtualPage} />
                <Select usersPerPage={usersPerPage} setUsersPerPage={setUsersPerPage} />
            </PaginationContent>
            <ListCollaboratorsContent>
                {searchUser.length > 0 ? (
                    filteredCollaborators.map((collaborator, i) => (
                        <CollaboratorInfoCard key={i} datasCollaborator={collaborator} />
                    ))
                ) : (
                    listCollaborators.map((collaborator, i) => (
                        <CollaboratorInfoCard key={i} datasCollaborator={collaborator} />
                    ))
                )}
            </ListCollaboratorsContent>
        </>
    )
}

export default Pagination;