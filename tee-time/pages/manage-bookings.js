import Head from 'next/head'
import Header from '../components/header'

export default function ManageBookings() {
    return (
        <>
            <Head>
                <title>Manage Bookings</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Header></Header>
        </>
    )
}