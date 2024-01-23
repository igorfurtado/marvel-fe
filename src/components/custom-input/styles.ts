import { colors, fonts } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 1rem;
  box-sizing: border-box;
  background-color: transparent;
  font-family: ${fonts.family.Epilogue};
  font-weight: 500;
  font-size: ${fonts.size.small};
  color: ${colors['blue/200']};
  margin-top: 4px;
`

export const InputIcon = styled.div`
  position: relative;
`
