import Button from '@/components/custom-button'
import CustomInput from '@/components/custom-input'
import CustomText from '@/components/custom-text'
import { Doubt } from '@/components/icons/doubt'
import { Eye } from '@/components/icons/eye'
import { Next } from '@/components/icons/next'
import { colors } from '@/styles/references'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useLogin from '@/hooks/use-login'
import {
  BuildingWrapper,
  Container,
  Content,
  ForgotPasswordBox,
  Form,
  FormBox,
  Header
} from './styles'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { signIn } = useLogin()
  const navigate = useNavigate()

  const login = () => {
    signIn({ email, password })
    navigate('/home')
  }

  return (
    <Container>
      <Header>
        <img src='src/assets/logo_pontua_white.svg' alt='Logo Pontua' />
      </Header>

      <Content>
        <BuildingWrapper url='src/assets/building-image.svg'></BuildingWrapper>
        <FormBox>
          <CustomText
            color={colors['blue/600']}
            fontSize='36px'
            fontWeight='700'
          >
            Bem-vindo
            <CustomText
              color={colors['orange/500']}
              fontSize='36px'
              fontWeight='700'
            >
              .
            </CustomText>
          </CustomText>
          <CustomText
            $textalign='left'
            $margintop='1.5rem'
            color={colors['gray/500']}
          >
            informe as suas credenciais de acesso ao portal
          </CustomText>

          <Form
            onSubmit={(event) => {
              event?.preventDefault()
              login()
            }}
          >
            <div>
              <CustomInput
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeHolder='nome@email.com'
                $login
              />

              <CustomInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeHolder='Informe sua senha'
                $login
                IconAfter={() => <Eye />}
                iconClick={() =>
                  setShowPassword((currentValue) => !currentValue)
                }
                type={!showPassword ? 'password' : 'text'}
              />
            </div>

            <Button title='entrar' iconAfter={Next} />
          </Form>
          <ForgotPasswordBox>
            <button>
              <Doubt />
              <CustomText fontSize='11px' color='#F21A05' fontWeight='400'>
                Esqueceu a senha?
              </CustomText>
            </button>
          </ForgotPasswordBox>
        </FormBox>
      </Content>
    </Container>
  )
}

export default Login
