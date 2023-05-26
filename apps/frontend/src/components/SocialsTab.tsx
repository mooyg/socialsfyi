'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
const SOCIAL_MEDIA = [
  {
    name: 'SPOTIFY',
    icon: '/icons/spotify.svg',
  },
  {
    name: 'GITHUB',
    icon: '/icons/github.svg',
  },
  {
    name: 'TWITTER',
    icon: '/icons/twitter.svg',
  },
  {
    name: 'YOUTUBE',
    icon: '/icons/youtbe.svg',
  },
  {
    name: 'INSTAGRAM',
    icon: '/icons/instagram.svg',
  },
]

export function SocialsTab() {
  return (
    <div className="mt-2 flex flex-col space-y-4">
      <ScrollArea.Root className="h-[400px] w-full overflow-hidden rounded ">
        <ScrollArea.Viewport className="h-full w-full rounded">
          <h2 className="animate-text to-button-background mt-2  bg-gradient-to-r from-white bg-clip-text text-2xl font-black text-transparent">
            Add your socials
          </h2>
          {SOCIAL_MEDIA.map((socialMedia) => (
            <div className="mt-2.5 border-t border-t-white pt-2.5 text-[13px] leading-[18px] text-white">
              <div>
                <input type="text" disabled={true} />
              </div>
            </div>
          ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex touch-none select-none bg-gray-500 p-1 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-xl bg-black  before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"></ScrollArea.Thumb>
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}
