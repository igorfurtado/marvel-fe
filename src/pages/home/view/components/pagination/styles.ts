import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.divider};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  div {
    &.number-buttons-wrapper {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    border: none;
    height: 100%;
    background-color: transparent;
    font-size: 0.875rem;
    background-color: ${colors.white};
    color: ${colors['blue/600']};

    &.numberButton {
      width: 2.5rem;
    }

    &.selected {
      font-weight: 500;
      background-color: ${colors['gray/background']};
    }

    &.borderButton {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      padding: 0.625rem 1rem;
    }

    &.rightButton {
      border-radius: 0rem 0.5rem 0.5rem 0rem;
      border-left: 1px solid ${colors.divider};
    }

    &.leftButton {
      border-radius: 0.5rem 0rem 0rem 0.5rem;
      border-right: 1px solid ${colors.divider};
    }
  }
`
