import ky from '@/ky'
import { User, UserUploads } from '@/types'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function getUploads(token: RequestCookie | undefined) {
  try {
    return await ky
      .get('uploads/', {
        headers: {
          Cookie: `${token?.name}=${token?.value}`,
        },
      })
      .json<UserUploads[]>()
  } catch {
    return undefined
  }
}
