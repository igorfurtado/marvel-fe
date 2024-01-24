import { colors, fonts } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 2.5rem;
  gap: 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 1px solid ${colors['blue/600']};
    padding: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    transition: 0.3s all ease-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`

export const ProfileNav = styled.nav<{
  color?: string
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  a {
    font-size: ${fonts.size.higherSmall};
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s all ease-out;

    &:hover {
      transform: scale(1.02);
    }

    span {
      white-space: nowrap;
    }
  }
`

export const NavIndicator = styled.div<{
  $translation: number
  width: number
}>`
  height: 2px;
  width: ${({ width }) => `${width}px`};
  background-color: ${colors['blue/600']};
  transition: transform 0.3s ease-out;
  transform-origin: bottom;
  transform: ${(props) => `translateX(${props.$translation}px)`};
  margin-top: 1rem;
`
