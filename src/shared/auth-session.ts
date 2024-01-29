import { UserSession } from '@/types/auth-session'

const AUTH_USER_SESSION = 'AUTH_USER_SESSION'

interface SessionService {
  getCurrentUser(): UserSession | null
  createSession(userSession: UserSession): void
}

export default class SessionServiceBrowserStorage implements SessionService {
  getCurrentUser(): UserSession | null {
    const jsonString = sessionStorage.getItem(AUTH_USER_SESSION) as string
    const data = JSON.parse(jsonString)
    return data as UserSession
  }

  clearAuthSession(): void {
    sessionStorage.removeItem(AUTH_USER_SESSION)
  }

  createSession(userSession: UserSession): void {
    this.clearAuthSession()
    sessionStorage.setItem(AUTH_USER_SESSION, JSON.stringify(userSession))
  }
}
