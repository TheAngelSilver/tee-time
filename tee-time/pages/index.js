import Link from 'next/link'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Home() {
    const [ session, loading ] = useSession()

    return (
        <>
            <Head>
                <title>tee-time</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Header></Header>
            <Layout>{!session && <>
                Not signed in <br />
                <button onClick={() => signIn()} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-1 py-1 rounded">Sign in</button>
            </>}
            {session && <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-1 py-1 rounded">Sign out</button>
            </>}</Layout>
            
        </>)
}