// pages/appartement.js
import Head from 'next/head'
import Layout from '../components/MyLayout.js'

export default function Appartement() {
  return (
    <div>
    <Head>
    <title>Page appartement</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Layout>
      <article>
        <div className="information-appartement">
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
        <div>
          <img src={acf.image} alt="lol"/>
        </div>
      </article>
    </Layout>
    </div>
  )
}