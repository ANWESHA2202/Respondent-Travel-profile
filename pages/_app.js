// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
            <title> Respondent Travel profile </title>
        </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp