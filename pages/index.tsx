import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Converter from '../components/converter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neptune Mutual || Converter!!</title>
        <meta name="description" content="NEP <==> BUSD Converter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Converter />
      </main>
    </div>
  )
}

export default Home
