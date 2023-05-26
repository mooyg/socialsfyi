import { Tabs } from '@/components/Tabs'
import { getUser } from '@/lib/getUser'
import { cookies } from 'next/headers'
import { redirect, useRouter } from 'next/navigation'

export default async function Dashboard() {
  const token = cookies().get('connect.sid')
  const user = await getUser(token)

  if (!user) {
    redirect('/login')
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-x-2 space-y-2  bg-secondary-background p-8 border border-button-background rounded-3xl w-[500px] ">
          <div className="flex space-x-2 m-1">
            <p className="font-bold text-4xl ">Welcome </p>
            <p className="font-bold text-4xl text-button-background">{user?.username}!</p>
          </div>
          <Tabs user={user} />
        </div>
      </div>
    </>
  )
}
