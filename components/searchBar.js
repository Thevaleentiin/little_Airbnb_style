import { string, func, number } from 'prop-types'

const SearchBar = ({searchValue, handleInputText, found, total}) => (
  <div>
    <input type="text" value={searchValue} onChange={handleInputText}/>
    {found ?
     <p>Found {found} out of {total}</p>
     :
     <p>No appartment found</p>
    }
  </div>
)

export default SearchBar

SearchBar.propTypes = {
  searchValue: string.isRequired,
  handleInputText: func.isRequired,
  found: number.isRequired,
  total: number.isRequired,
}