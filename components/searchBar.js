import { string, func, number } from 'prop-types'

const SearchBar = ({searchValue, handleInputText, found, total}) => (
  <>
    <input className="IptSearch" type="text" placeholder="tapez le nom d'un appartement" value={searchValue} onChange={handleInputText}/>
    {found ?
     <p className="Found">Found {found} out of {total}</p>
     :
     <p className="Found">No appartment found</p>
    }
  </>
)

export default SearchBar

SearchBar.propTypes = {
  searchValue: string.isRequired,
  handleInputText: func.isRequired,
  found: number.isRequired,
  total: number.isRequired,
}