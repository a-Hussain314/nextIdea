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
        <title>next-idea | {props.serverPropsUser.name}</title>
        <meta name="description" content={`${props.serverPropsUser.name} works at "${props.serverPropsUser.company.name}" company`} />
        <link rel="icon" href="/idea.png" />
      </Head>

      <main>
      user id :  {userId}
            <br/><br/>
            user name :  {props.serverPropsUser.name}
            <br/><br/>
            user email :  {props.serverPropsUser.email}
            <br/><br/>
            user phone :  {props.serverPropsUser.phone}
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