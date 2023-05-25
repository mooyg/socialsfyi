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
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col space-x-2 bg-secondary-background p-8 border border-button-background rounded-3xl w-[300px] ">
        <div className="flex mb-2">
          <h2 className="font-bold text-2xl">LOG </h2>
          <h2 className="font-bold text-2xl text-button-background">.IN</h2>
        </div>
        <Form.Root onSubmit={loginUser} className="space-y-8">
          <Form.Field name="email">
            <div className="flex items-baseline justify-between">
              <Form.Label className="font-bold text-sm">Email</Form.Label>
              <Form.Message className="text-red opacity-80" match={'typeMismatch'}>
                Please enter your email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="Enter your email"
                className="p-2 bg-button-background border border-button-background bg-opacity-10 outline-none rounded-lg text-sm font-semibold"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="password">
            <div className="flex items-baseline justify-between">
              <Form.Label className="font-bold text-sm">Password</Form.Label>
            </div>
            <Form.Control asChild>
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                type="password"
                placeholder="Enter your password"
                className="p-2 bg-button-background border border-button-background bg-opacity-10 outline-none rounded-lg text-sm font-semibold"
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button
              disabled={loading}
              className={`bg-button-background bg-opacity-10 w-fit p-2 rounded-md border border-button-background font-extrabold px-8 text-center`}
            >
              Login
            </button>
          </Form.Submit>
          {error ? (
            <div className="flex font-bold bg-red-700 border border-red-700 bg-opacity-10 p-1 rounded-xl text-xs">
              Some Error Occured
            </div>
          ) : null}
        </Form.Root>
      </div>
    </div>
  )
}
