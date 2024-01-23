import styled from 'styled-components'
import { colors, fonts } from '../../styles/references'

export const StyledText = styled.span<{
  fontFamily?: string
  fontSize?: string
  color?: string
  $textalign?: string
  fontWeight?: string
  $margintop?: string
  $marginbottom?: string
  $marginleft?: string
  $marginright?: string
}>`
  font-family: ${({ fontFamily }) => fontFamily || fonts.family.Epilogue};
  font-size: ${({ fontSize }) => fontSize || fonts.size.p};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || colors.black};
  text-align: ${({ $textalign }) => $textalign || 'center'};
  margin-top: ${({ $margintop }) => $margintop || 0};
  margin-bottom: ${({ $marginbottom }) => $marginbottom || 0};
  margin-left: ${({ $marginleft }) => $marginleft || 0};
  margin-right: ${({ $marginright }) => $marginright || 0};
`
