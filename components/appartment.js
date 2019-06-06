import { object, array, func } from 'prop-types'

const Appartment = ({appartment: {id, title, acf}, favorites, toggleFav}) => (
  <div>
    <img src={acf.image} alt="lol"/>
    <h1>
      <svg height="20" width="20">
        <circle cx="10" cy="10" r="10" fill={acf.available ? 'green' : 'red'} />
      </svg>
      {title.rendered}
      {favorites.includes(id) && '❤️'}
    </h1>

    <button onClick={e => toggleFav(e, id)}>
      {favorites.includes(id) ? 'Remove favorite' : 'Set favorite'}
    </button>

    <p>${acf.price} per night</p>
    <p>{new Array(parseInt(acf.rating)).fill('⭐️️️️️')}</p>
  </div>
)

export default Appartment

Appartment.propTypes = {
  appartment: object.isRequired,
  favorites: array.isRequired,
  toggleFav: func.isRequired
}