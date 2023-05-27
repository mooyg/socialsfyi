import ky from '@/ky'
import { User } from '@/types'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import SocialLinks from 'social-links'

export interface FieldInput {
  socialMedia: {
    name: string
    icon: string
    value: string | undefined
  }
  user: User | undefined
}
export function FieldInput({ socialMedia, user }: FieldInput) {
  const [isUrlValid, setIsUrlValid] = useState(true)
  const [showSaveButton, setShowSaveButton] = useState(false)
  const [socialMediaLink, setSocialMediaLink] = useState(socialMedia.value)
  function saveLink() {
    if (isUrlValid) {
      console.log(socialMedia.name)
      ky.post('users/update/social/', {
        json: {
          userId: user?.id,
          socialMediaType: socialMedia.name,
          socialMediaLink,
        },
      })
        .json<User>()
        .then((data) => {
          toast.success(`Updated your ${socialMedia.name} URL`)
          setShowSaveButton(false)
          window.location.reload()
        })
        .catch(() => {
          toast.error(`Some error occured`)
        })
    }
  }
  return (
    <div className="mt-2.5 pt-2.5 text-[13px] leading-[18px] text-white">
      <div className="flex items-center space-x-2">
        <img className="h-7 w-7" src={socialMedia.icon} />
        <input
          type="text"
          className="bg-button-background selection:color-white box-border inline-flex resize-none appearance-none items-center justify-center rounded-md bg-opacity-10 p-1 text-sm  font-semibold outline-none"
          placeholder={`Enter your ${socialMedia.name.toLocaleLowerCase()}`}
          value={socialMediaLink}
          onChange={(e) => {
            setSocialMediaLink(e.target.value.trim())
            setShowSaveButton(true)
            const socialLinks = new SocialLinks()
            const detectedProfile = socialLinks.detectProfile(e.target.value.trim())
            if (detectedProfile.length <= 0) {
              setIsUrlValid(false)
            } else if (detectedProfile === socialMedia.name.toLocaleLowerCase()) {
              setIsUrlValid(true)
            }
          }}
        />
        {showSaveButton && (
          <button
            onClick={saveLink}
            className="border-button-background bg-button-background w-fit rounded-md border bg-opacity-10 p-2 font-extrabold "
          >
            Save
          </button>
        )}
        {!isUrlValid && <p className="font-bold text-red-600">Not valid url</p>}
      </div>
      <Toaster />
    </div>
  )
}
