'use client'
import * as RadixTabs from '@radix-ui/react-tabs'
import { CustomiseTab } from '@/components/CustomiseTab'
import { User, UserUploads } from '@/types'
import { UploadsTabs } from './UploadsTab'
import { SocialsTab } from './SocialsTab'
import { PremiumTab } from './PremiumTab'

interface Tabs {
  user: User | undefined
  uploads: UserUploads[] | undefined
}
export function Tabs({ user, uploads }: Tabs) {
  return (
    <RadixTabs.Root defaultValue="card-tab">
      <RadixTabs.List className="bg-button-background border-button-background space-x-2 rounded-xl border bg-opacity-10 p-2">
        <RadixTabs.Trigger
          value="card-tab"
          className="p-2 font-bold data-[state=active]:rounded-lg data-[state=active]:bg-black data-[state=active]:bg-opacity-40 data-[state=active]:p-2"
        >
          Card
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:rounded-lg data-[state=active]:bg-black data-[state=active]:bg-opacity-40 data-[state=active]:p-2"
          value="uploads-tab"
        >
          Uploader
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:rounded-lg data-[state=active]:bg-black data-[state=active]:bg-opacity-40 data-[state=active]:p-2"
          value="socials-tab"
        >
          Socials
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:rounded-lg data-[state=active]:bg-black data-[state=active]:bg-opacity-40 data-[state=active]:p-2"
          value="premium-tab"
        >
          Premium
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="p-2 font-bold data-[state=active]:rounded-lg data-[state=active]:bg-black data-[state=active]:bg-opacity-40 data-[state=active]:p-2"
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
      <RadixTabs.Content value="socials-tab">
        <SocialsTab user={user} />
      </RadixTabs.Content>
      <RadixTabs.Content value="premium-tab">
        <PremiumTab user={user} />
      </RadixTabs.Content>
      <RadixTabs.Content value="account-tab">
        <p>SETTINGS HERE</p>
      </RadixTabs.Content>
    </RadixTabs.Root>
  )
}
