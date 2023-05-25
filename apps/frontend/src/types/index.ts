export interface User {
  id: string
  email: string
  username?: string
  discordId?: string
  discordUsername?: string
  avatar?: string
  card: UserCard
}

export interface UserSlice {
  user: User | undefined | null
  setUser: (user: User | undefined | null) => void
}

export interface UserCard {
  id: string
  bio: string
  userId: string
  passwordProtection: boolean
  password: string
  viewCount: number
  viewCountEnabled: boolean
  colorBackground: string
}
