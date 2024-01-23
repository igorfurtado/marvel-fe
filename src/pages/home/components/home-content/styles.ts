import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1.5rem 2.5rem;
  gap: 0.9375rem;
`

export const RowContainer = styled.div<{
  $gridrow: string
}>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.$gridrow};
  grid-template-rows: 1fr;
  gap: 0 0.9375rem;
`

export const Card = styled.div`
  display: flex;
  height: 9.375rem;
  padding: 0.875rem 0.625rem;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1rem;
  background-color: ${colors['gray/100']};
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
`

export const Divisor = styled.div`
  height: 0.0625rem;
  width: 100%;
  margin-top: 2rem;
  background-color: ${colors.divider};
`
