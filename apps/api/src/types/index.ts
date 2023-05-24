export interface DiscordProfile {
  id: string
  username: string
  global_name: null
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  banner: null
  banner_color: null
  accent_color: null
  locale: string
  mfa_enabled: boolean
  premium_type: number
  avatar_decoration: null
  email: string
  verified: boolean
  provider: string
  accessToken: string
  fetchedAt: Date
}
