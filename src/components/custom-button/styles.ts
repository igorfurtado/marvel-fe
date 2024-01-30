import { colors } from '@/styles/references'
import styled, { css } from 'styled-components'

export const Container = styled.div<{
  disabled?: boolean
}>`
  display: flex;
  flex-direction: column;
  width: 100%;

  transition: 0.3s all ease-out;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        transform: scale(1.02);
      }
    `}
`

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  height: 3.5625rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #081b4e;
  border-radius: 0.625rem;
  color: #fbfbfb;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;
  transition: all 0.3s ease-out;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: unset;
      background-color: ${colors['gray/500']};
      border: 1px solid ${colors['gray/500']};
      color: ${colors.white};
    `}
`
