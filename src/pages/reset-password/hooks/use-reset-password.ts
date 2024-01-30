import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useResetPassword = () => {
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)
  const navigate = useNavigate()

  const returnToLogin = () => {
    navigate('/login')
  }

  useEffect(() => {
    if (!email) {
      setError('')
    }
  }, [email])

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(email)) {
      setError('Informe um e-mail válido')
    } else {
      setError('')
      setSuccess(true)
    }
  }

  const handleEmail = useCallback((value: string) => {
    return setEmail(value)
  }, [])

  return { handleSubmit, returnToLogin, error, success, email, handleEmail }
}

export default useResetPassword
