import { ElementType, useRef } from 'react'
import { Container, Input } from './styles'

type CustomInputProps = {
  Icon?: ElementType
  placeHolder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({
  Icon,
  placeHolder,
  value,
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
      {Icon && <Icon />}
      <Input
        ref={inputRef}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}

export default CustomInput
