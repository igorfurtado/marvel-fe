import { colors, fonts } from '@/styles/references'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;

  button {
    &.icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: transparent;
      right: 0;
      margin-right: 1rem;
    }
  }
`

export const Input = styled.input<{
  $login?: boolean
}>`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  background-color: transparent;
  font-family: ${fonts.family.Epilogue};
  font-weight: 500;
  font-size: ${fonts.size.small};
  color: ${colors['blue/200']};
  margin-top: 4px;

  &::placeholder {
    color: ${colors['gray/500']};
    opacity: 0.6;
  }

  ${({ $login }) =>
    $login &&
    css`
      margin-top: 0px;
      height: 3.5625rem;
      border: 1px solid #b7b7b7;
      border-radius: 0.625rem;
      font-weight: 400;
      font-size: ${fonts.size.higherSmall};
      color: ${colors['gray/500']};
      transition: all 0.2s ease-out;
      &:focus {
        border: 1px solid ${$login ? colors['blue/600'] : colors['gray/500']};
        font-weight: 700;
        color: ${colors['blue/600']};
        font-size: ${fonts.size.p};
      }
    `}
`

export const InputIcon = styled.div`
  position: relative;
`
