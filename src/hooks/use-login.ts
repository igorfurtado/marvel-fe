import SessionServiceBrowserStorage from '@/shared/auth-session'
import { UserLogin } from '@/types/user'
import { createValidSession } from '@/utils/create-valid-session'

const useLogin = () => {
  const authSession = new SessionServiceBrowserStorage()

  const signOut = () => {
    authSession.clearAuthSession()
  }

  const signIn = (userData: UserLogin) => {
    const session = createValidSession(userData)
    authSession.createSession(session)
  }

  const getCurrentUser = authSession.getCurrentUser()

  return {
    signOut,
    signIn,
    getCurrentUser
  }
}

export default useLogin
