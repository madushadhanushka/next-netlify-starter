import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />

          <link href="
https://cdn.jsdelivr.net/npm/diagramatics@1.4/css/diagramatics.css" rel="stylesheet"></link>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
          <svg id="mysvg"></svg>
          <div id="controldiv"></div>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
