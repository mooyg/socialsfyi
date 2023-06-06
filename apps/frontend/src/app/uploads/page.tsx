import { getUploads } from '@/lib/getUploads'
import { cookies } from 'next/headers'

export default async function Upload() {
  const token = cookies().get('connect.sid')

  const uploads = await getUploads(token)

  return (
    <div className="container">
      {uploads?.map((upload) => {
        return (
          <div key={upload.id} className="border-t border-t-white p-4">
            <img
              draggable={false}
              src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/image/${upload.id}`}
            />
          </div>
        )
      })}
    </div>
  )
}
