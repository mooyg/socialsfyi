import { Navbar } from '@/components/Navbar'
import './globals.css'
import { cookies } from 'next/headers'
import { getUser } from '@/lib/getUser'
export const metadata = {
  title: 'SocialsFYI',
  description: 'Create your own personalised cards.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get('connect.sid')
  const user = await getUser(token)

  return (
    <html lang="en">
      <body className="p-2">
        <Navbar user={user} />
        {children}
      </body>
    </html>
  )
}
