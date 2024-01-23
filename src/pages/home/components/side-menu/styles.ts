import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  min-height: 100%;
  width: 16rem;
  background-color: ${colors.white};
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  width: 100%;
`

export const Divisor = styled.div`
  height: 0.0625rem;
  width: 100%;
  background-color: ${colors.divider};
`

export const NavOptions = styled.button<{
  color?: string
}>`
  flex-direction: column;
  border: none;

  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  div {
    padding: 0 1.5rem;
    color: ${({ color }) => color || colors.black};

    &:first-child {
      padding-top: 1.5rem;
    }
  }
`
