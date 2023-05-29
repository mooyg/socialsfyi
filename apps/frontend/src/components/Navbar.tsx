'use client'
import { User } from '@/types'
import { useRouter } from 'next/navigation'

export interface Navbar {
  user: User | undefined
}
export function Navbar({ user }: Navbar) {
  const router = useRouter()
  return (
    <>
      <div className="mb-12 flex justify-between">
        <div className="flex">
          <p className="text-2xl font-bold ">SOCIALS</p>
          <p className="text-button-background text-2xl font-bold">.FYI</p>
        </div>
        <div className="flex space-x-2">
          {user ? (
            <>
              <button
                onClick={() => router.push('/dashboard')}
                className="border-button-background bg-button-background rounded-[14px] border bg-opacity-10 p-2 px-10 font-extrabold"
              >
                My account
              </button>
              {user.premium && <h2>Premium user</h2>}
            </>
          ) : (
            <>
              <button
                onClick={() => router.push('/login')}
                className="border-button-background bg-button-background rounded-[14px] border bg-opacity-10 p-2 px-10 font-extrabold"
              >
                Log In
              </button>
              <button
                onClick={() => router.push('/signup')}
                className="border-button-background bg-button-background hidden rounded-[14px] border bg-opacity-10 p-2 px-8 font-extrabold md:block"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
