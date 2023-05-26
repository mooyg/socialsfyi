'use client'
import { User, UserCard } from '@/types'
import * as Switch from '@radix-ui/react-switch'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import * as Popover from '@radix-ui/react-popover'
import * as Avatar from '@radix-ui/react-avatar'
import { useDebounce } from '@/hooks/use-debounce'
import ky from '@/ky'
import { Toaster, toast } from 'react-hot-toast'

interface CustomiseTab {
  user: User | undefined
}
export function CustomiseTab({ user }: CustomiseTab) {
  const [color, setColor] = useState(user?.card.colorBackground)
  const [passwordInput, setPasswordInput] = useState(false)
  const [viewCountEnabled, setViewCountEnabled] = useState(user?.card.viewCountEnabled)
  const [passwordProtection, setPasswordProtection] = useState(user?.card.passwordProtection)
  const [password, setPassword] = useState('')
  const [showSaveBioButton, setShowSaveBioButton] = useState(false)
  const [bio, setBio] = useState(user?.card.bio)
  const [file, setFile] = useState<File>()
  const [cardBanner, setCardBanner] = useState(user?.card.cardBanner)
  const [avatar, setAvatar] = useState(user?.avatar)

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
        if (data.viewCountEnabled) {
          toast.success('The view count is now enabled')
        } else {
          toast.error('The view count is now disabled')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  function enablePassword() {
    ky.post('card/update/enable/password', {
      json: {
        userId: user?.id,
        password,
      },
    })
      .json<UserCard>()
      .then((data) => {
        setPasswordProtection(data.passwordProtection)
        setPasswordInput(false)
        toast.success('Added password protection and updated password')
      })
      .catch((e) => {
        console.log(e)
      })
  }
  function disablePassword() {
    ky.post('card/update/disable/password', {
      json: {
        userId: user?.id,
      },
    })
      .json<UserCard>()
      .then((data) => {
        setPasswordProtection(data.passwordProtection)
        setPasswordInput(false)
        toast.success('Disbaled password protection')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  function saveBio() {
    ky.post('card/update/bio', {
      json: {
        userId: user?.id,
        bio,
      },
    })
      .json<UserCard>()
      .then((data) => {
        setBio(data.bio)
        setShowSaveBioButton(false)
        toast.success('Updated Bio Successfully')
      })
      .catch((e) => {
        console.log(e)
        toast.error('Something Happened while updating bio')
      })
  }
  function saveCardColor() {
    ky.post('card/update/color', {
      json: {
        userId: user?.id,
        cardColor: color,
      },
    })
      .json<UserCard>()
      .then((data) => {
        setColor(data.colorBackground)
        toast.success('Updated Card Color Successfully')
      })
      .catch((e) => {
        console.log(e)
        toast.error('Couldnt Update Card Color')
      })
  }

  function uploadCardBanner() {
    const form = new FormData()
    if (!file) {
      throw new Error('No file')
    }
    form.append('file', file)
    form.append('cardId', user?.card.id!)
    form.append('userId', user?.id!)
    ky.post('uploads/cardbanner', {
      body: form,
    })
      .json<UserCard>()
      .then((data) => {
        setCardBanner(data.cardBanner)
      })
  }
  function uploadProfileAvatar() {
    const form = new FormData()
    if (!file) {
      throw new Error('No file')
    }
    form.append('file', file)
    form.append('userId', user?.id!)
    ky.post('uploads/avatar', {
      body: form,
    })
      .json<User>()
      .then((data) => {
        setAvatar(data.avatar)
      })
  }
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h2 className="animate-text to-button-background mt-2  bg-gradient-to-r from-white bg-clip-text text-2xl font-black text-transparent">
          Start Customising your card
        </h2>
        <div className="flex flex-col space-y-2">
          <label className="text-md font-bold">Profile Avatar</label>
          <Popover.Root>
            <Popover.Trigger className="cursor-pointer" asChild>
              <Avatar.Root className=" inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle hover:opacity-50   ">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  src={`http://localhost:8000/image/${avatar}`}
                  alt="Colm Tuite"
                />
                <Avatar.Fallback className="text-button-background leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-bold">
                  PD
                </Avatar.Fallback>
              </Avatar.Root>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={5}
                className="rounded-lg border-2 border-black  bg-[#BC63DE] p-2"
              >
                <div className="flex flex-col">
                  <label className="cursor-pointer font-bold">
                    {file ? file.name : 'Choose the profile avatar'}
                    <input
                      onChange={(e) => setFile(e.target.files![0])}
                      type="file"
                      className="hidden"
                    />
                    <Popover.Close>
                      <button
                        onClick={uploadProfileAvatar}
                        className="w-fit rounded-md border border-black bg-black bg-opacity-10 p-2 font-extrabold "
                      >
                        Save
                      </button>
                    </Popover.Close>
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
                  src={`http://localhost:8000/image/${cardBanner}`}
                  alt="Colm Tuite"
                />
                <Avatar.Fallback className="text-button-background leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-bold">
                  CT
                </Avatar.Fallback>
              </Avatar.Root>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={5}
                className="rounded-lg border-2 border-black  bg-[#BC63DE] p-2"
              >
                <div className="flex flex-col">
                  <label className="cursor-pointer font-bold">
                    {file ? file.name : 'Choose the profile banner'}
                    <input
                      onChange={(e) => setFile(e.target.files![0])}
                      type="file"
                      className="hidden"
                    />
                    <Popover.Close>
                      <button
                        onClick={uploadCardBanner}
                        className="w-fit rounded-md border border-black bg-black bg-opacity-10 p-2 font-extrabold "
                      >
                        Save
                      </button>
                    </Popover.Close>
                  </label>
                </div>

                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <label className="text-md font-bold">
            Views {viewCountEnabled && user?.card.viewCount}
          </label>
          <Switch.Root
            defaultChecked={viewCountEnabled}
            onCheckedChange={updateShowViewCount}
            className=" data-[state=checked]:bg-button-background relative h-[25px] w-[42px] cursor-pointer rounded-full  outline-none  data-[state=unchecked]:bg-red-500"
            id="views"
          >
            <Switch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
          <label className="text-md font-bold">Password Protection</label>
          <Switch.Root
            defaultChecked={passwordProtection}
            onCheckedChange={(isChecked) => {
              if (isChecked) {
                setPasswordInput(true)
              } else {
                disablePassword()
              }
            }}
            className=" data-[state=checked]:bg-button-background relative h-[25px] w-[42px] cursor-pointer rounded-full  outline-none  data-[state=unchecked]:bg-red-500"
            id="password-protected"
          >
            <Switch.Thumb className="block h-[21px] w-[21px] translate-x-0.5   rounded-full  bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
          {passwordInput && (
            <>
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                type="password"
                className="bg-button-background border-button-background rounded-lg border bg-opacity-10 p-2 text-sm font-semibold outline-none"
                placeholder="Enter your card password"
              />
              <button
                onClick={enablePassword}
                className="bg-button-background border-button-background w-fit rounded-md border bg-opacity-10 p-2 font-extrabold "
              >
                Save
              </button>
            </>
          )}
          <label className="text-md font-bold">Pick a color for your card</label>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="bg-button-background border-button-background w-fit rounded-md border bg-opacity-10 p-2 px-10 font-extrabold">
                {color}
              </button>
            </Popover.Trigger>
            <Popover.Content className="rounded-lg bg-black p-2">
              <HexColorPicker color={color} onChange={setColor} />
              <Popover.Close
                className="bg-button-background border-button-background mt-2 w-fit rounded-md border bg-opacity-10 p-2 font-extrabold "
                onClick={saveCardColor}
              >
                Save
              </Popover.Close>
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Root>
          <label className="text-md font-bold">Bio</label>
          <textarea
            onChange={(e) => {
              setBio(e.target.value)
              if (!showSaveBioButton) {
                setShowSaveBioButton(true)
              }
            }}
            value={bio}
            className="bg-button-background selection:color-white box-border inline-flex resize-none appearance-none items-center justify-center rounded-md bg-opacity-10 p-2 text-sm  font-semibold outline-none"
          />
          {showSaveBioButton && (
            <button
              onClick={saveBio}
              className="bg-button-background border-button-background w-fit rounded-md border bg-opacity-10 p-2 font-extrabold "
            >
              Save
            </button>
          )}
          <label className="text-md font-bold">Add Social Links</label>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="bg-button-background border-button-background w-fit rounded-md border bg-opacity-10 p-2 px-8 font-extrabold">
                Add Link
              </button>
            </Popover.Trigger>
            <Popover.Content className="bg-white">
              Show links and option to add links
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Root>
        </div>
      </div>
      <Toaster />
    </>
  )
}
