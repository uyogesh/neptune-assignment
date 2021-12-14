import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Converter from '../components/converter'
import styles from '../styles/Home.module.css'
import Modal from '../components/modal'
import Wallet from '../components/wallet'

const Home: NextPage = () => {
  const [ open, setOpen ] = useState<boolean>(false)
  
  const handleOpenConnector = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Neptune Mutual || Converter!!</title>
        <meta name="description" content="NEP <==> BUSD Converter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Converter />
        <div>
        <button type={`button`} tabIndex={0} onClick={handleOpenConnector} className="btn btn-primary txt-24 txt-blue cursor-pointer">
          Check Wallet Details
        </button>
        </div>
      </main>
      <Modal open={open} title="Wallet Details" handleClose={handleOpenConnector}>
          <Wallet handleClose={handleOpenConnector}/>
      </Modal>
    </div>
  )
}

export default Home
