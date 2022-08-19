import { SelectPagination, SelectContent } from "./styles"

export const Select = ({ usersPerPage, setUsersPerPage }) => {

  return (
    <SelectContent>
      <p>Colaboradores por página</p>
      <SelectPagination value={usersPerPage} onChange={(e) => setUsersPerPage(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </SelectPagination>
    </SelectContent>
  )
}