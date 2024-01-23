import { ReactNode } from 'react'
import { StyledText } from './styles'

type CustomTextProps = {
  children: ReactNode
}

const CustomText = ({ children }: CustomTextProps) => {
  return <StyledText>{children}</StyledText>
}

export default CustomText
