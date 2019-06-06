import { object, array, func } from 'prop-types'
import Link from 'next/link'

const PostLink = props => (
  <>
    <Link as={`/p/${props.id}`} href={`/appartement?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </>
);

const Appartment = ({appartment: {id, slug, title, acf}, favorites, toggleFav}) => (
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
    <PostLink title={title.rendered} id={slug} />
  </div>
)

export default Appartment

Appartment.propTypes = {
  appartment: object.isRequired,
  favorites: array.isRequired,
  toggleFav: func.isRequired
}