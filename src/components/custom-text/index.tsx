import { ReactNode } from 'react'
import { StyledText } from './styles'

type CustomTextProps = {
  children: ReactNode
  fontFamily?: string
  fontSize?: string
  color?: string
  textAlign?: string
  fontWeight?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}

const CustomText = ({
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop
}: CustomTextProps) => {
  return (
    <StyledText
      fontFamily={fontFamily}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      {children}
    </StyledText>
  )
}

export default CustomText
