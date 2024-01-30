import Button from '@/components/custom-button'
import CustomText from '@/components/custom-text'
import { colors } from '@/styles/references'
import { FormBox } from '../styles'

type SuccessConfirmationProps = {
  returnToLogin: () => void
}

const SuccessConfirmation = ({ returnToLogin }: SuccessConfirmationProps) => {
  return (
    <FormBox
      $justifyContent='flex-start'
      $padding='3.375rem 2.25rem'
      $gap='1.5rem'
    >
      {' '}
      <CustomText color={colors['blue/600']} fontSize='36px' fontWeight='700'>
        Tudo certo
        <CustomText
          color={colors['orange/500']}
          fontSize='36px'
          fontWeight='700'
        >
          {' '}
          ;)
        </CustomText>
      </CustomText>
      <CustomText
        $textalign='left'
        $margintop='1.5rem'
        color={colors['gray/500']}
      >
        Foi enviado um e-mail para você com instruções de como redefinir a sua
        senha.
      </CustomText>
      <Button title='voltar para o login' onClick={returnToLogin} />
    </FormBox>
  )
}

export default SuccessConfirmation
