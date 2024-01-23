import { ReactNode } from 'react'
import { StyledText } from './styles'

type CustomTextProps = {
  children: ReactNode
  fontFamily?: string
  fontSize?: string
  color?: string
  textAlign?: string
  fontWeight?: string
  $margintop?: string
  $marginbottom?: string
  $marginleft?: string
  $marginright?: string
}

const CustomText = ({
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  $marginbottom,
  $marginleft,
  $marginright,
  $margintop
}: CustomTextProps) => {
  return (
    <StyledText
      fontFamily={fontFamily}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}
      $marginbottom={$marginbottom}
      $marginleft={$marginleft}
      $marginright={$marginright}
      $margintop={$margintop}
    >
      {children}
    </StyledText>
  )
}

export default CustomText
