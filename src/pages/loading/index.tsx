import CustomText from '@/components/custom-text'
import { LoadingPage } from './styles'

const Loading = () => {
  return (
    <LoadingPage>
      <div>
        <img
          src='src/assets/logo_pontua_white.svg'
          alt='Logo Pontua'
          width={300}
        />
        <CustomText>Carregando...</CustomText>
      </div>
    </LoadingPage>
  )
}

export default Loading
