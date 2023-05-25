import ky from 'ky'

export default ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  credentials: 'include',
})
