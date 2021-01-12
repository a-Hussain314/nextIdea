import '../styles/globals.scss'
import Head from 'next/head'
import styles from "../styles/styles.module.scss"
import { useState } from 'react'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("en")
  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
    
    <div className={styles.layout}>

      <div className={styles.w100}>
      <header className={"header"}>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/users">
            <a>users</a>
        </Link>
      </header>
      <Component {...pageProps}  lang ={lang} setLang={setLang} />
      </div>

      <div className={styles.w100}>
        <footer>footer</footer>
      </div>

    </div>
  </>
  )
}

export default MyApp
