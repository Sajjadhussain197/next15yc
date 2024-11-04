import { auth,signOut, signIn } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async() => {
    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
    <nav className='flex justify-between items-center'>
        <Link href={'/'}>
            <Image src={"/YCDirectory.png"}
            alt='logo'
            width={154}
            height={30}/>
        </Link>
        <div className='flex items-center gap-5 text-black'>
            {session && session?.user ? (<>
            <div className='flex items-center gap-5'>
                <Link href={'/startup/create'}>
                <span>
                    create
                </span>
                </Link>
                <form action={async()=>{
                    "use server"
                    await signOut({ redirectTo: '/' });
                    }}>
                    <button type='submit'>Logout</button>
                </form>
                <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
                </Link>

            </div>
            </>
        ):(<>
        <form 
        action={async()=>{
            "use server"
            await signIn('github' )}}
        >
            <button type='submit'>login</button>

        </form>
            </>)}

        </div>

    </nav>
      
    </header>
  )
}

export default NavBar
