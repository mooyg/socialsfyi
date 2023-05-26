import ky from '@/ky'
import { User, UserCard } from '@/types'

export async function getCardByUsername(username: string) {
  try {
    return await ky.get(`card/${username}`).json<User>()
  } catch {
    return undefined
  }
}
