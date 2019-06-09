import { object, array, func } from 'prop-types'
import Link from 'next/link'

import "../style.css"

const Appartment = ({appartment: {id, slug, title, acf}, favorites, toggleFav}) => (
  <div className="appart-container">
    <img src={acf.image} alt="lol"/>
    <div className="container-text-appartement">
      <h1>
        <svg height="20" width="20">
          <circle cx="10" cy="10" r="10" fill={acf.available ? 'green' : 'red'} />
        </svg>
        {title.rendered}
        {favorites.includes(id) && '❤️'}
      </h1>

      <button className="Btn-primary" onClick={e => toggleFav(e, id)}>
        {favorites.includes(id) ? 'Remove favorite' : 'Set favorite'}
      </button>
      <Link as={`/Appartement/${slug}`} href={`/Appartement?id=${id}`}>
        <button className="Btn-primary">Voir l'annonce</button>
      </Link>
      <p>${acf.price} per night</p>
      <p>{new Array(parseInt(acf.rating)).fill('⭐️️️️️')}</p>
    </div>
  </div>
)

export default Appartment

Appartment.propTypes = {
  appartment: object.isRequired,
  favorites: array.isRequired,
  toggleFav: func.isRequired
}