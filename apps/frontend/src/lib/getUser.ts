import ky from '@/ky'
import { User } from '@/types'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function getUser(token: RequestCookie | undefined) {
  try {
    return await ky
      .post('users/me', {
        headers: {
          Cookie: `${token?.name}=${token?.value}`,
          cache: 'no-store',
        },
      })
      .json<User>()
  } catch {
    return undefined
  }
}
