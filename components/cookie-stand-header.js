import Link from 'next/link'

export default function CookieStandHeader({username, onLogout}) {
    return (
        <header className="bg-green-400 w-full flex items-center space-x-60">
            <h1 className="text-3xl font-bold px-64 py-4 inline-block align-middle">Cookie Stand Admin</h1>
            <div className="float-right">
                <p className="px-2 inline-block align-middle text-sm bg-green-200 rounded-md m-1 p-1">{username}</p>
                <Link href="/">
                    <a className="px-2 inline-block align-middle text-white text-sm bg-green-600 p-1 rounded-md m-1" onClick={onLogout}>Sign Out</a>
                </Link>
                <Link href="/overview"><a className="inline-block align-middle text-sm bg-gray-200 rounded-sm m-1 px-1">Overview</a></Link>
            </div>
        </header>       
    )
}



