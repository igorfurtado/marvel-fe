import { useForm } from 'react-hook-form'

import { z } from 'zod'

import useLogin from '@/hooks/use-login'
import { HtmlEvent } from '@/shared/html-event'
import { UserLogin } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const defaultValues = {
  email: '',
  password: ''
}

const useFormView = () => {
  const { signIn } = useLogin()
  const navigate = useNavigate()

  const login = ({ email, password }: UserLogin) => {
    signIn({ email, password })
    navigate('/home')
  }

  const dataSchema = z.object({
    email: z
      .string()
      .nonempty('Informe um e-mail')
      .refine(
        (email) => {
          if (!email) return true
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          return emailRegex.test(email)
        },
        { message: 'Insira um e-mail válido' }
      ),
    password: z.string().nonempty('Informe a senha')
  })

  const methods = useForm<UserLogin>({
    defaultValues,
    resolver: zodResolver(dataSchema)
  })

  const { control, handleSubmit, reset } = methods

  const onSubmit = (data: UserLogin, event: HtmlEvent) => {
    event!.preventDefault()
    login(data)
  }

  const clearForm = () => reset()

  return { control, clearForm, handleSubmit, onSubmit, navigate }
}

export default useFormView
