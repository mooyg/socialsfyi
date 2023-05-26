import { CardAvatar } from '@/components/card/Avatar'
import { CardBanner } from '@/components/card/Banner'
import { getCardByUsername } from '@/lib/getCardByUsername'

export default async function CardPage({
  params,
}: {
  params: {
    username: string
  }
}) {
  const cardDetails = await getCardByUsername(params.username)
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-secondary-background border-button-background  flex w-[512px] max-w-lg flex-col space-x-2 space-y-2 rounded-3xl border p-8">
          <div className="relative flex flex-col items-center justify-center">
            <CardAvatar />
            <CardBanner />
            <div className="mt-10 text-center">
              <p className="text-3xl font-bold">{cardDetails?.username}</p>
              <p className="font-semibold">{cardDetails?.card.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
