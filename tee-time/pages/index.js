import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Home() {
    
    return (
        <>
            <Head>
                <title>tee-time</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Header></Header>
        </>
    )
}