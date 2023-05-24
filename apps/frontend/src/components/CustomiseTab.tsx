import * as Avatar from '@radix-ui/react-avatar'
import * as Popover from '@radix-ui/react-popover'

export function CustomiseTab() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h2 className="animate-text bg-gradient-to-r from-white  to-button-background bg-clip-text text-transparent text-2xl font-black">
          Start Customising your card
        </h2>
        <div className="flex flex-col">
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
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold">Bio</label>
          <textarea className="p-2 bg-button-background font-semibold text-sm bg-opacity-10 appearance-none inline-flex items-center justify-center rounded-md outline-none box-border  selection:color-white resize-none" />
        </div>
        <button className="bg-button-background bg-opacity-10 w-fit p-2 rounded-md border border-button-background font-extrabold px-10">
          Save
        </button>
      </div>
    </>
  )
}
