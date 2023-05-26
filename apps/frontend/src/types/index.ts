export interface User {
  id: string
  email: string
  username?: string
  discordId?: string
  discordUsername?: string
  avatar?: string
  card?: UserCard
}

export interface UserSlice {
  user: User | undefined | null
  setUser: (user: User | undefined | null) => void
}

export interface UserCard {
  id: string
  bio: string
  cardBanner: string
  passwordProtection: boolean
  password: null
  viewCount: number
  viewCountEnabled: boolean
  colorBackground: string
  userId: string
}

export interface UserUploads {
  id: string
  uploaderId: string
  name: string
  type: Type
}

export enum Type {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
}
