'use client'

import * as Avatar from '@radix-ui/react-avatar'
export function CardBanner() {
  return (
    <Avatar.Root className="inline-flex select-none items-center justify-center overflow-hidden rounded-md align-middle ">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={`http://localhost:8000/image/3f66dce0-1239-48e1-9d22-ac34323fc1ee`}
        alt="Colm Tuite"
        draggable="false"
      />
      <Avatar.Fallback className="text-button-background leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-bold">
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
