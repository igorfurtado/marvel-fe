import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  background-color: ${colors['blue/800']};
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 10.5625rem;
    height: 3.125rem;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 8.75rem;
`

export const BuildingWrapper = styled.div<{
  url: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  max-width: 38.375rem;
  max-height: 29.2407rem;
  height: 100%;
  margin-bottom: 2.5rem;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  display: flex;
  min-width: 23.75rem;
  min-height: 27.0625rem;
  background-color: ${colors.white};
  border-radius: 1.75rem;

  span {
    &:first-child {
      white-space: nowrap;
    }

    line-height: 1.27rem;
  }
`

export const Form = styled.form`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 1rem; */
    margin-bottom: 0.75rem;
  }
`

export const ForgotPasswordBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1.5rem;
    border: none;
    background-color: transparent;

    svg {
      margin-bottom: 0.125rem;
    }
  }
`
