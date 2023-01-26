import Head from 'next/head'


import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Products from '@/components/products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>test-mks-frontend-challenge</title>
        <meta name="description" content="test-mks-frontend-challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../images/header/logo.svg" />
      </Head>
      <Header />
      <Products />

    </>
  )
}
