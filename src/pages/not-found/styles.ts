import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${colors['blue/800']};
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 18.75rem;
  width: 18.75rem;

  span {
    line-height: 150%;
    white-space: nowrap;
  }
`
