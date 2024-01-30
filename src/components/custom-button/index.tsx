import { ButtonHTMLAttributes, ElementType } from 'react'

import { Container, StyledButton } from './styles'

type ButtonProps = {
  title: string
  disabled?: boolean
  iconBefore?: ElementType | null
  iconAfter?: ElementType | null
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  title,
  disabled,
  iconBefore: IconBefore,
  iconAfter: IconAfter,
  onClick
}: ButtonProps) => {
  return (
    <Container disabled={disabled}>
      <StyledButton disabled={disabled} onClick={onClick}>
        {IconBefore && <IconBefore />}
        {title}
        {IconAfter && <IconAfter />}
      </StyledButton>
    </Container>
  )
}

export default Button
