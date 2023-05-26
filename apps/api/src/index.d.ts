import { User } from '@prisma/client'
import express = require('express')

declare module 'express' {
  interface Request {
    user: Omit<User, 'password'>
  }
}
