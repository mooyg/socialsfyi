'use client'

import { User } from '@/types'
import * as Avatar from '@radix-ui/react-avatar'
export interface CardAvatar {
  user: User | undefined
}
export function CardAvatar({ user }: CardAvatar) {
  return (
    <Avatar.Root className=" absolute -top-20  inline-flex h-[110px] w-[110px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/image/${user?.avatar}`}
        alt="Colm Tuite"
        draggable="false"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
