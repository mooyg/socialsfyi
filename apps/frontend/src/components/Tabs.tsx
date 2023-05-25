'use client'
import * as RadixTabs from '@radix-ui/react-tabs'
import { CustomiseTab } from '@/components/CustomiseTab'
import { User } from '@/types'

interface Tabs {
  user: User | undefined
}
export function Tabs({ user }: Tabs) {
  return (
    <RadixTabs.Root defaultValue="customise-tab">
      <RadixTabs.List className="bg-button-background bg-opacity-10 border border-button-background p-2 space-x-2 rounded-xl ">
        <RadixTabs.Trigger
          value="customise-tab"
          className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
        >
          Customise
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
          value="uploads-tab"
        >
          Uploads
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
          value="settings-tab"
        >
          Settings
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content value="customise-tab">
        <CustomiseTab user={user} />
      </RadixTabs.Content>
      <RadixTabs.Content value="uploads-tab">UPLOADS</RadixTabs.Content>
      <RadixTabs.Content value="settings-tab">
        <p>SETTINGS HERE</p>
      </RadixTabs.Content>
    </RadixTabs.Root>
  )
}
