import { colors, fonts } from '@/styles/references'
import { ElementType, useRef } from 'react'
import CustomText from '../custom-text'
import { Container, ErrorText, Input } from './styles'

type InputBaseProps = {
  IconBefore?: ElementType
  IconAfter?: ElementType
  iconClick?: () => void
  value: string | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  placeHolder?: string
  $login?: boolean
  type?: React.HTMLInputTypeAttribute | undefined
  errorText?: string
}

const InputBase = ({
  value,
  IconAfter,
  IconBefore,
  placeHolder,
  $login,
  type,
  errorText,
  onChange,
  iconClick
}: InputBaseProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <Container onClick={handleIconClick}>
        {IconBefore && <IconBefore />}
        <Input
          ref={inputRef}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          $login={$login}
          type={type}
        />
        <button
          className='icon'
          onClick={(event) => {
            event?.preventDefault()
            iconClick?.()
          }}
        >
          {IconAfter && <IconAfter />}
        </button>
      </Container>

      {errorText && (
        <ErrorText>
          <CustomText
            $margintop='0.125rem'
            fontSize={fonts.size.superSmall}
            color={colors['orange/500']}
          >
            {errorText}
          </CustomText>
        </ErrorText>
      )}
    </>
  )
}

export default InputBase
