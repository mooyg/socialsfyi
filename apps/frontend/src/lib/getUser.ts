import ky from '@/ky'
import { User } from '@/types'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function getUser(token: RequestCookie | undefined) {
  console.log(token)
  try {
    return await ky
      .post('users/me', {
        headers: {
          Cookie: `${token?.name}=${token?.value}`,
        },
      })
      .json<User>()
  } catch {
    return undefined
  }
}
