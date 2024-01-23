import { colors } from '@/styles/references'
import styled, { css, keyframes } from 'styled-components'

const skeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1.5rem 2.5rem;
  gap: 0.9375rem;
`

export const CardsWrapper = styled.div`
  display: flex;
  height: 31.25rem;
  align-items: center;
  justify-content: center;
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

export const Card = styled.div<{
  $skeleton?: string
}>`
  display: flex;
  width: 100%;
  height: 9.375rem;
  padding: 0.875rem 0.625rem;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1rem;
  background-color: ${colors['gray/100']};
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  img {
    width: 83px;
    height: 119px;
    border-radius: 15px;
    object-fit: cover;

    @media (max-width: 1100px) {
      width: 60px;
    }
  }

  div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.6rem;
    overflow: hidden;
    word-break: break-word;
  }

  .textWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;

    span {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  ${(props) =>
    props.$skeleton === 'true' &&
    css`
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: ${skeletonAnimation} 2s linear infinite;
      animation-delay: 1s;
    `}
`

export const Divisor = styled.div`
  height: 0.0625rem;
  width: 100%;
  margin-top: 2rem;
  background-color: ${colors.divider};
`

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
