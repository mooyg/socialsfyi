'use client'

import ky from '@/ky'
import * as Form from '@radix-ui/react-form'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  async function loginUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    try {
      const res = await ky
        .post('auth/signin', {
          json: {
            email,
            password,
          },
          credentials: 'include',
        })
        .json()
      setLoading(false)
      if (res) {
        router.push('/dashboard')
      }
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-secondary-background border-button-background flex w-[300px] flex-col space-x-2 rounded-3xl border p-8 ">
        <div className="mb-2 flex">
          <h2 className="text-2xl font-bold">LOG </h2>
          <h2 className="text-button-background text-2xl font-bold">.IN</h2>
        </div>
        <Form.Root onSubmit={loginUser} className="space-y-8">
          <Form.Field name="email">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-bold">Email</Form.Label>
              <Form.Message className="text-red opacity-80" match={'typeMismatch'}>
                Please enter your email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="Enter your email"
                className="bg-button-background border-button-background rounded-lg border bg-opacity-10 p-2 text-sm font-semibold outline-none"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="password">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-bold">Password</Form.Label>
            </div>
            <Form.Control asChild>
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                type="password"
                placeholder="Enter your password"
                className="bg-button-background border-button-background rounded-lg border bg-opacity-10 p-2 text-sm font-semibold outline-none"
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button
              disabled={loading}
              className={`bg-button-background border-button-background w-fit rounded-md border bg-opacity-10 p-2 px-8 text-center font-extrabold`}
            >
              Login
            </button>
          </Form.Submit>
          {error ? (
            <div className="flex rounded-xl border border-red-700 bg-red-700 bg-opacity-10 p-1 text-xs font-bold">
              Some Error Occured
            </div>
          ) : null}
        </Form.Root>
      </div>
    </div>
  )
}
