import { Navbar } from '@/components/Navbar'
import './globals.css'
import { cookies } from 'next/headers'
import { getUser } from '@/lib/getUser'
export const metadata = {
  title: 'SocialsFYI',
  description: 'Create your own personalised cards.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-2">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
