import { User } from './user'

export type UserSession = {
  accessToken?: string | null
  user: User
}
