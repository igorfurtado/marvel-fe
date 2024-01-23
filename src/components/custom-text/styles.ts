import styled from 'styled-components'
import { colors, fonts } from '../../styles/references'

export const StyledText = styled.span<{
  fontFamily?: string
  fontSize?: string
  color?: string
  textAlign?: string
}>`
  font-family: ${({ fontFamily }) => fontFamily || fonts.family.Epilogue};
  font-size: ${({ fontSize }) => fontSize || fonts.size.p};
  color: ${({ color }) => color || colors.black};
  text-align: ${({ textAlign }) => textAlign || 'center'};
`
