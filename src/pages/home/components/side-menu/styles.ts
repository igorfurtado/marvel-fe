import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
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

export const NavOptions = styled.ul<{
  color?: string
}>`
  flex-direction: column;
  width: 100%;
  display: flex;
  gap: 1rem;

  button:first-child {
    margin-top: 1.5rem;
  }

  button {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    background-color: transparent;
    padding: 0 1.5rem;
    color: ${({ color }) => color || colors.black};
    gap: 1rem;
  }
`
