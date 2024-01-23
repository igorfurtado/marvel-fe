import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 2.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 1px solid ${colors['blue/600']};
    padding: 1rem;
    border-radius: 1rem;
    background-color: transparent;
  }
`
