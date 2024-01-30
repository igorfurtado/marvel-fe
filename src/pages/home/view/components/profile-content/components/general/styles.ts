import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 14.125rem;
  padding: 2.5rem;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  border-radius: 0.9375rem;
  background-color: ${colors.white};
  gap: 1.5rem;
`

export const Image = styled.div<{
  $url: string
}>`
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  min-width: 5.625rem;
  height: 5.625rem;
  border-radius: 50%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;

  span {
    text-align: left;
    line-height: 150%;
  }
`
