import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'SocialsFYI',
  description: 'Create your own personalised cards.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-2">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
