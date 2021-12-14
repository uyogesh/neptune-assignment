import '../styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from '../utils/web3provider'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Web3ReactProvider>
  )
}
export default MyApp
