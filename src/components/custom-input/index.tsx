import { colors, fonts } from '@/styles/references'
import { ElementType, useRef } from 'react'
import CustomText from '../custom-text'
import { Container, ErrorText, Input } from './styles'

type CustomInputProps = {
  IconBefore?: ElementType
  IconAfter?: ElementType
  iconClick?: () => void
  placeHolder?: string
  value: string
  $login?: boolean
  type?: React.HTMLInputTypeAttribute | undefined
  errorText?: string
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({
  IconBefore,
  IconAfter,
  placeHolder,
  value,
  $login,
  type,
  errorText,
  iconClick,
  onBlur,
  onFocus,
  onChange
}: CustomInputProps) => {
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
          onFocus={onFocus}
          onBlur={onBlur}
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
            teste
          </CustomText>
        </ErrorText>
      )}
    </>
  )
}

export default CustomInput
