import { readFile, readdir } from 'fs/promises'
import path, { join } from 'path'

export const uploadDir = join(__dirname, '../../../useruploads')

export const findUploads = async () => {
  return await readdir(uploadDir)
}

export const findFullFileNameFromSlug = async (slug: string) => {
  return await new Promise<string>(async (resolve, reject) => {
    const uploads = await findUploads()

    for (let i = 0; i < uploads.length; i++) {
      if (uploads[i].indexOf(slug) + 1) {
        resolve(uploads[i])
        break
      }
    }

    reject()
  })
}
export const getFileBySlug = async (slug: string) => {
  try {
    const fileName = await findFullFileNameFromSlug(slug)
    const fullPath = `${uploadDir}/${fileName}`

    const file = await readFile(fullPath)

    return file as Buffer
  } catch (error) {
    return undefined
  }
}
