import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>Login to tee-time</title>
            </Head>
            <h1>Login</h1>

            <form>
                Email:<br />
                <input type="text"></input>
                <br />
                <br />
                Password:<br />
                <input type="password"></input>
                <br />
                <br />
                <button>Login</button>
            </form>

            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}