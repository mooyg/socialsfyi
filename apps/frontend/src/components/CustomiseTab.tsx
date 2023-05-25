'use client'
import { User, UserCard } from '@/types'
import * as Switch from '@radix-ui/react-switch'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import * as Popover from '@radix-ui/react-popover'
import * as Avatar from '@radix-ui/react-avatar'
import { useDebounce } from '@/hooks/use-debounce'
import ky from '@/ky'

interface CustomiseTab {
  user: User | undefined
}
export function CustomiseTab({ user }: CustomiseTab) {
  const [color, setColor] = useState('#aabbcc')
  const [passwordInput, setPasswordInput] = useState(false)
  const [viewCountEnabled, setViewCountEnabled] = useState(user?.card.viewCountEnabled)
  const [passwordProtection, setPasswordProtection] = useState(user?.card.passwordProtection)
  const [password, setPassword] = useState('')
  function updateShowViewCount(e: boolean) {
    ky.post('card/update/showviewcount', {
      json: {
        userId: user?.id,
        showViewCount: e,
      },
    })
      .json<UserCard>()
      .then((data) => {
        setViewCountEnabled(data.viewCountEnabled)
      })
  }

  function enablePassword() {
    ky.post('update/enable/password', {
      json: {
        userId: user?.id,
        password,
      },
    })
      .json<UserCard>()
      .then((data) => {
        setPasswordProtection(data.passwordProtection)
      })
  }
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h2 className="animate-text bg-gradient-to-r from-white  to-button-background bg-clip-text text-transparent text-2xl font-black mt-2">
          Start Customising your card
        </h2>
        <div className="flex flex-col space-y-2">
          <label className="text-md font-bold">Profile Picture</label>
          <Popover.Root>
            <Popover.Trigger className="cursor-pointer" asChild>
              <Avatar.Root className=" inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle hover:opacity-50   ">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback className="text-button-background font-bold leading-1 flex h-full w-full items-center justify-center bg-white text-[15px]">
                  PD
                </Avatar.Fallback>
              </Avatar.Root>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={5}
                className="bg-[#BC63DE] border-2 border-black  rounded-lg p-2"
              >
                <div className="flex flex-col">
                  <label className="font-bold cursor-pointer">
                    Choose the profile picture
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <label className="text-md font-bold">Profile Banner</label>
          <Popover.Root>
            <Popover.Trigger className="cursor-pointer" asChild>
              <Avatar.Root className="inline-flex h-20 select-none items-center justify-center overflow-hidden rounded-md align-middle hover:opacity-50">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  src="https://img.freepik.com/free-photo/purple-blue-wallpaper-with-colorful-swirl_1340-27545.jpg?w=740&t=st=1684947940~exp=1684948540~hmac=ed8571bcc0cae8119e54c3b87cd6da3922588336b9a2b8b94e92a1b7314cfab0"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback className="text-button-background font-bold leading-1 flex h-full w-full items-center justify-center bg-white text-[15px]">
                  CT
                </Avatar.Fallback>
              </Avatar.Root>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={5}
                className="bg-[#BC63DE] border-2 border-black  rounded-lg p-2"
              >
                <div className="flex flex-col">
                  <label className="font-bold cursor-pointer">
                    Choose the profile banner
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <label className="text-md font-bold">Views {user?.card.viewCount}</label>
          <Switch.Root
            defaultChecked={viewCountEnabled}
            onCheckedChange={updateShowViewCount}
            className="w-[42px] h-[25px] rounded-full data-[state=checked]:bg-button-background relative  outline-none cursor-default data-[state=unchecked]:bg-red-500"
            id="views"
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
          <label className="text-md font-bold">Password Protection</label>
          <Switch.Root
            defaultChecked={passwordProtection}
            onCheckedChange={() => setPasswordInput(true)}
            className="w-[42px] h-[25px] rounded-full data-[state=checked]:bg-button-background relative  outline-none cursor-default data-[state=unchecked]:bg-red-500"
            id="password-protected"
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white   rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
          {passwordInput && (
            <>
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                type="password"
                className="p-2 bg-button-background border border-button-background bg-opacity-10 outline-none rounded-lg text-sm font-semibold"
                placeholder="Enter your card password"
              />
              <button
                onClick={enablePassword}
                className="bg-button-background bg-opacity-10 w-fit p-2 rounded-md border border-button-background font-extrabold "
              >
                Save
              </button>
            </>
          )}
          <label className="text-md font-bold">Pick a color for your card</label>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="bg-button-background bg-opacity-10 w-fit p-2 rounded-md border border-button-background font-extrabold px-10">
                {color}
              </button>
            </Popover.Trigger>
            <Popover.Content>
              <HexColorPicker color={color} onChange={setColor} />
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Root>
          <label className="text-md font-bold">Bio</label>
          <textarea
            onChange={() => null}
            value={user?.card.bio}
            className="p-2 bg-button-background font-semibold text-sm bg-opacity-10 appearance-none inline-flex items-center justify-center rounded-md outline-none box-border  selection:color-white resize-none"
          />
        </div>
      </div>
    </>
  )
}
