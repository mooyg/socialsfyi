'use client'

import { CustomiseTab } from '@/components/CustomiseTab'
import * as Tabs from '@radix-ui/react-tabs'

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-x-2 space-y-2  bg-secondary-background p-8 border border-button-background rounded-3xl w-[500px]">
          <div className="flex space-x-2 m-1">
            <p className="font-bold text-4xl ">Welcome </p>
            <p className="font-bold text-4xl text-button-background"> mooy!</p>
          </div>
          <Tabs.Root defaultValue="customise-tab">
            <Tabs.List className="bg-button-background bg-opacity-10 border border-button-background p-2 space-x-2 rounded-xl ">
              <Tabs.Trigger
                value="customise-tab"
                className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
              >
                Customise
              </Tabs.Trigger>
              <Tabs.Trigger
                className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
                value="socials"
              >
                Socials
              </Tabs.Trigger>

              <Tabs.Trigger
                className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
                value="music"
              >
                Music
              </Tabs.Trigger>
              <Tabs.Trigger
                className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
                value="settings"
              >
                Settings
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="customise-tab">
              <CustomiseTab />
            </Tabs.Content>
            <Tabs.Content value="socials">
              <p>Add your social links here</p>
            </Tabs.Content>

            <Tabs.Content value="music">
              <p>MUSIC STUFF HERE</p>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <p>SETTINGS HERE</p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </>
  )
}
