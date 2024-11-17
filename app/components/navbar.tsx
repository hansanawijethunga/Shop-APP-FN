import { auth, signOut, signIn } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NavBar = async () => {
    const session = await auth()
    return (
        <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src="/logo.jpg" alt='logo' width={50} height={50}></Image>
                </Link>
                <div className='flex items-center gap-5'>
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span>Create</span>
                            </Link>
                            <button onClick={async () => { 
                                 'use server'
                               await signOut  ()
                                
                                }}>
                                <span>Logout</span>
                            </button>
                            <Link href={'/user/session?.id'}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={async () => {
                            'use server'
                            await signIn('github')
                        }}>
                            <span>Login</span>
                        </button>

                    )}
                </div>
            </nav>
        </div>
    )
}

export default NavBar;