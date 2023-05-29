import { User } from '@/types'

export interface PremiumTab {
  user: User | undefined
}

export function PremiumTab({ user }: PremiumTab) {
  return (
    <>
      {user?.premium ? (
        'Already Subscribed'
      ) : (
        <form>
          <button type="submit">Checkout</button>
        </form>
      )}
    </>
  )
}
