import Head from 'next/head'
import Link from 'next/link'
import styles from "../styles/styles.module.scss"


function Home(props) {

  const langHandler = () =>{
    props.setLang( props.lang === "en" ? "fr" : "en") 
  }

  return (
    <div >
      <Head>
        <title>next-idea | Home</title>
        <meta name="description" content={` next-idea website is website cotains data for 10 users`} />
        <link rel="icon" href="/idea.png" />
      </Head>

      <main>

        <h1 className={styles.h1}>
          home page <br/>
          the current language is {props.lang}
        </h1>
        
        <button onClick={langHandler}>toggle Lang</button>

        <br/>

        <Link href="/users">
          <a>go to users page</a>
        </Link>

      </main>

    
    </div>
  )
}



export default Home;
