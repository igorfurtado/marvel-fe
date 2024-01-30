import Button from '@/components/custom-button'
import CustomInput from '@/components/custom-input'
import CustomText from '@/components/custom-text'
import { Doubt } from '@/components/icons/doubt'
import { Eye } from '@/components/icons/eye'
import { Next } from '@/components/icons/next'
import { colors } from '@/styles/references'

import useFormView from './hooks/use-form'
import {
  BuildingWrapper,
  Container,
  Content,
  ForgotPasswordBox,
  Form,
  FormBox,
  Header
} from './styles'
import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { control, handleSubmit, onSubmit } = useFormView()

  return (
    <Container>
      <Header>
        <img src='src/assets/logo_pontua_white.svg' alt='Logo Pontua' />
      </Header>

      <Content>
        <BuildingWrapper $url='src/assets/building-image.svg'></BuildingWrapper>
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

          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <CustomInput
                name='email'
                $control={control}
                placeHolder='nome@email.com'
                $login
              />

              <CustomInput
                name='password'
                $control={control}
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
