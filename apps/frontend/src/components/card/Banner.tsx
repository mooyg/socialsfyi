'use client'

import { User } from '@/types'
import * as Avatar from '@radix-ui/react-avatar'
export interface CardBanner {
  user: User | undefined
}
export function CardBanner({ user }: CardBanner) {
  return (
    <Avatar.Root className="inline-flex h-[200px]  select-none items-center justify-center overflow-hidden rounded-md align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/image/${user?.card.cardBanner}`}
        alt="Colm Tuite"
        draggable="false"
      />
      <Avatar.Fallback className="text-button-background leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-bold">
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
