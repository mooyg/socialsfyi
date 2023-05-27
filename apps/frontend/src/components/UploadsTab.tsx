import ky from '@/ky'
import { User, UserUploads } from '@/types'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface UploadsTab {
  uploads: UserUploads[] | undefined
  user: User | undefined
}

export function UploadsTabs({ uploads, user }: UploadsTab) {
  const [file, setFile] = useState<File>()

  return (
    <>
      <div className="mt-2 flex flex-col space-y-4">
        <ScrollArea.Root className="h-96 overflow-hidden rounded">
          <ScrollArea.Viewport className="h-full w-full rounded">
            <div className="flex flex-col space-y-2 p-4">
              <h2 className="text-2xl font-bold">Uploads</h2>
              <label className="bg-button-background border-button-background w-fit cursor-pointer rounded-2xl border bg-opacity-10 p-2 font-bold ">
                Upload File
                <input
                  onChange={(e) => {
                    setFile(e.target.files![0])
                    const form = new FormData()
                    if (!e.target.files![0]) {
                      throw new Error('No file')
                    }
                    form.append('file', e.target.files![0])
                    form.append('userId', user?.id!)
                    ky.post('uploads/file', {
                      body: form,
                    })
                      .json()
                      .then(() => {
                        console.log('?')
                        toast.success('Uploaded your image to the server.')
                        window.location.reload()
                      })
                      .catch(() => {
                        toast.error('Some Error occured')
                      })
                  }}
                  type="file"
                  className="hidden"
                  multiple={false}
                />
              </label>
            </div>
            {uploads?.map((upload) => {
              return (
                <div key={upload.id} className="border-t border-t-white p-4">
                  <img src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/image/${upload.id}`} />
                </div>
              )
            })}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="bg-blackA6 hover:bg-blackA8 flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="bg-mauve10 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className="bg-blackA6 hover:bg-blackA8 flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="bg-mauve10 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-blackA8" />
        </ScrollArea.Root>
        <Toaster />
      </div>
    </>
  )
}
