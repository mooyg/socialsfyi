import ky from '@/ky'
import { User, UserCard } from '@/types'

export async function getUserDetailsByUsername(username: string) {
  try {
    console.log(username)
    return await ky.get(`card/${username}`, { cache: 'no-store' }).json<User>()
  } catch {
    return undefined
  }
}
