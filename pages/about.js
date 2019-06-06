// pages/about.js
import Head from 'next/head'
import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <div>
    <Head>
    <title>Page About</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Layout>
      <p>This is the about page</p>
    </Layout>
    </div>
  )
}