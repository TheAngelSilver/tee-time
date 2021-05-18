import Link from 'next/link'
import Image from 'next/image'
import Layout from'./layout'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Header() {
    const [ session, loading ] = useSession()

    return(
        <>
            <div className="px-auto py-4 bg-white flex shadow mt-1">
                <div className="text-4xl text-black pl-4 pr-8">
                    tee-time
                </div>

                <div className="flex-grow"></div>
                <div className="flex divide-x my-2">
                    <div className="text-xl text-gray-800 px-8 flex">
                        <Link href="/">
                            <a>Calendar</a>
                        </Link>
                    </div>
                    <div className="text-xl text-gray-800 px-8 flex">
                        <Link href="/manage-bookings">
                            <a>Bookings</a>
                        </Link>
                    </div>
                    <div className="text-xl text-gray-800 px-8 flex">
                        <Link href="/course-info">
                            <a>The Course</a>
                        </Link>
                    </div>
                </div>
                <div className="flex-grow"></div>

                <Layout>
                    {!session && <>
                        <span className="mr-4">Not signed in</span>
                        <button onClick={() => signIn()} className="text-white bg-red-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 p-2 rounded-xl">Sign in</button>
                    </>}
                    {session && <>
                        <span className="mr-4">Signed in as {session.user.email}</span>
                        <button onClick={() => signOut()} className="text-white bg-red-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 p-2 rounded-xl">Sign out</button>
                    </>}
                </Layout>
            </div>
        </>
    )
}