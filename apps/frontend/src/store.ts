import { create, StateCreator } from 'zustand'
import { User, UserSlice } from './types'

const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  user: null,
  setUser: (user: User | null | undefined) => set((state) => ({ user: user })),
})
export const useBoundStore = create<UserSlice>((...a) => ({
  ...createUserSlice(...a),
}))
