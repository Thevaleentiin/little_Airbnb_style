// pages/appartement.js
import Head from 'next/head'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'


export default function Appartement({appart: {acf, slug, title}}) {
  return (
    <div>
      <Head>
      <title>{slug}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <div className="container-page-appartement">
          <article>
            <div>
              <img src={acf.image} alt="lol"/>
            </div>
            <div className="information-appartement">
            <h1>
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" fill={acf.available ? 'green' : 'red'} />
            </svg>
            {title.rendered}
            </h1>
            <p className="title-price">${acf.price} <span>per night</span></p>
            <p className="title-ratings">{new Array(parseInt(acf.rating)).fill('⭐️️️️️')}</p>
            <p className="detail-appart" dangerouslySetInnerHTML={{__html: acf.details_full}}></p>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  )
}

Appartement.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://apirl.xyz/wp-json/wp/v2/appartments/${id}?_fields=id,title,slug,acf`);
  const appart = await res.json();
  console.log(`Fetched show: ${appart.name}`);
  //console.log(appart);
  return { appart };
};