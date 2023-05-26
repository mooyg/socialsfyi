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
      <div className="flex flex-col space-y-4 mt-2">
        <ScrollArea.Root className="rounded overflow-hidden h-[400px] ">
          <ScrollArea.Viewport className="w-full h-full rounded">
            <div className="p-4 flex flex-col space-y-2">
              <h2 className="font-bold text-2xl">Uploads</h2>
              <label className="font-bold w-fit cursor-pointer bg-button-background bg-opacity-10 p-2 border border-button-background rounded-2xl ">
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
                <div key={upload.id} className="p-4 border-t border-t-white">
                  <img src={`http://localhost:8000/image/${upload.id}`} />
                </div>
              )
            })}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-blackA8" />
        </ScrollArea.Root>
        <Toaster />
      </div>
    </>
  )
}
