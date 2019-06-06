import Appartment from './Appartment'
import { array, func } from 'prop-types'

const AppartmentList = ({ appartments, favorites, toggleFav }) => (
  <div>
    {appartments.map(el =>
      <Appartment
        key={el.id}
        appartment={el}
        favorites={favorites}
        toggleFav={toggleFav}
      />
    )}
  </div>
)

AppartmentList.propTypes = {
  appartments: array.isRequired,
  favorites: array.isRequired,
  toggleFav: func.isRequired
}

export default AppartmentList