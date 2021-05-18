import Head from 'next/head'
import Header from '../components/header'

export default function CourseInfo() {
    return (
        <>
            <Head>
                <title>Course Info</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Header></Header>
        </>
        
    )
}