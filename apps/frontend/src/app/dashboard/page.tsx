import { Tabs } from '@/components/Tabs'
import { getUploads } from '@/lib/getUploads'
import { getUser } from '@/lib/getUser'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import { redirect, useRouter } from 'next/navigation'

export default async function Dashboard() {
  const token = cookies().get('connect.sid')
  const user = await getUser(token)

  if (!user) {
    redirect('/login')
  }
  const uploads = await getUploads(token)
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-secondary-background border-button-background flex w-[512px]  max-w-lg flex-col space-x-2 space-y-2 rounded-3xl border p-8">
          <div className="m-1 flex space-x-2">
            <p className="text-4xl font-bold ">Welcome </p>
            <p className="text-button-background text-4xl font-bold">{user?.username}!</p>
          </div>
          <Tabs user={user} uploads={uploads} />
        </div>
      </div>
    </>
  )
}
