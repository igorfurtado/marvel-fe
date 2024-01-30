import Button from '@/components/custom-button'
import CustomInput from '@/components/custom-input'
import CustomText from '@/components/custom-text'
import { colors } from '@/styles/references'

import SuccessConfirmation from './components/success-confirmation'
import useResetPassword from './hooks/use-reset-password'
import {
  BuildingWrapper,
  Container,
  Content,
  Form,
  FormBox,
  Header
} from './styles'

const ResetPassword = () => {
  const { handleSubmit, returnToLogin, error, success, email, handleEmail } =
    useResetPassword()

  return (
    <Container>
      <Header>
        <img src='src/assets/logo_pontua_white.svg' alt='Logo Pontua' />
      </Header>

      <Content>
        <BuildingWrapper $url='src/assets/building-image.svg'></BuildingWrapper>
        {success ? (
          <SuccessConfirmation returnToLogin={returnToLogin} />
        ) : (
          <FormBox>
            <CustomText
              color={colors['blue/600']}
              fontSize='36px'
              fontWeight='700'
            >
              Recuperar senha
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
              Informe o e-mail do seu cadastro. Nós estaremos realizando o envio
              de um link com as instruções para você redefinir a sua senha.
            </CustomText>

            <Form
              onSubmit={(e) => {
                e?.preventDefault()
                handleSubmit()
              }}
            >
              <div>
                <CustomInput
                  placeHolder='Informe seu email'
                  pureOnChange={(event) => handleEmail(event.target.value)}
                  pureValue={email}
                  $reset
                  errorText={error}
                />
              </div>

              <Button title='enviar link' disabled={!email} />
            </Form>
          </FormBox>
        )}
      </Content>
    </Container>
  )
}

export default ResetPassword
