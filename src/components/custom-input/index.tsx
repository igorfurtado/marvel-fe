import { ElementType, useRef } from 'react'
import { Container, Input } from './styles'

type CustomInputProps = {
  IconBefore?: ElementType
  IconAfter?: ElementType
  placeHolder?: string
  value: string
  $login?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({
  IconBefore,
  IconAfter,
  placeHolder,
  value,
  $login,
  onChange
}: CustomInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <Container onClick={handleIconClick}>
      {IconBefore && <IconBefore />}
      <Input
        ref={inputRef}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        $login={$login}
      />
      {IconAfter && <IconAfter />}
    </Container>
  )
}

export default CustomInput
