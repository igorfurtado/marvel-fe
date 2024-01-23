import { ReactNode } from 'react'
import { StyledText } from './styles'

type CustomTextProps = {
  children: ReactNode
  fontFamily?: string
  fontSize?: string
  color?: string
  textAlign?: string
  fontWeight?: string
}

const CustomText = ({
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign
}: CustomTextProps) => {
  return (
    <StyledText
      fontFamily={fontFamily}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  )
}

export default CustomText
