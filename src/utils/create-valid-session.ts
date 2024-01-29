import { UserSession } from '@/types/auth-session'

const secretKey =
  'wZTlW0rzeHPXDYZ0PiQ5qELI+eVaR1aaLoyzOMSMXkAXleCjglJJBwrUdE4nQ/ist7KpdULgnIPzbQQImBtRnGaOaECF97G08'

export const createValidSession = ({
  email,
  password
}: {
  email: string
  password: string
}) => {
  const userId = Math.floor(Math.random() * 1000).toString()
  const name = 'Usuário Teste'

  const payload = {
    userId,
    password,
    email
  }

  const token = secretKey

  return {
    user: {
      userId: payload.userId,
      name: name,
      email: payload.email
    },
    accessToken: token
  } as UserSession
}
