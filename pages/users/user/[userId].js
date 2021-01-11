import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'




function user(props) {
    const router = useRouter()
    const { userId } = router.query
  return (
    <div >
      <Head>
        <title>{props.serverPropsUser.name}</title>
        <link rel="icon" href="/idea.png" />
      </Head>

      <main>
            user {userId}
            <br/><br/>
            {props.serverPropsUser.name}
            <br/><br/>
            {props.serverPropsUser.email}
            <br/><br/>
            {props.serverPropsUser.phone}
        <br/><br/>
        
        <Link href="/users">
          <a>go to all users page</a>
        </Link>

      </main>

    
    </div>
  )
}

export async function getServerSideProps(context) {
    const userId = context.params.userId;

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await res.data
  
    return {
      props: {serverPropsUser : data}, // will be passed to the page component as props
    }
  }

export default user;