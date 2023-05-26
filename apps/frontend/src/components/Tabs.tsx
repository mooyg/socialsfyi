'use client'
import * as RadixTabs from '@radix-ui/react-tabs'
import { CustomiseTab } from '@/components/CustomiseTab'
import { User, UserUploads } from '@/types'
import { UploadsTabs } from './UploadsTab'

interface Tabs {
  user: User | undefined
  uploads: UserUploads[] | undefined
}
export function Tabs({ user, uploads }: Tabs) {
  return (
    <RadixTabs.Root defaultValue="card-tab">
      <RadixTabs.List className="bg-button-background bg-opacity-10 border border-button-background p-2 space-x-2 rounded-xl ">
        <RadixTabs.Trigger
          value="card-tab"
          className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
        >
          Card
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
          value="uploads-tab"
        >
          Uploader
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:p-2 data-[state=active]:bg-opacity-40"
          value="account-tab"
        >
          Account
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content value="card-tab">
        <CustomiseTab user={user} />
      </RadixTabs.Content>
      <RadixTabs.Content value="uploads-tab">
        <UploadsTabs user={user} uploads={uploads} />
      </RadixTabs.Content>
      <RadixTabs.Content value="account-tab">
        <p>SETTINGS HERE</p>
      </RadixTabs.Content>
    </RadixTabs.Root>
  )
}
