import '../styles/globals.scss'
import styles from "../styles/styles.module.scss"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("en")
  return (
    <div className={styles.layout}>

      <div className={styles.w100}>
      <header className={"header"}>header</header>
      <Component {...pageProps}  lang ={lang} setLang={setLang} />
      </div>

      <div className={styles.w100}>
        <footer>footer</footer>
      </div>

    </div>
  )
}

export default MyApp
