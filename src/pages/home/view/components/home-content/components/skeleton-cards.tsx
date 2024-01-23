import { Card, RowContainer } from '../styles'

const SkeletonCards = () => {
  return (
    <>
      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        <Card $skeleton='true' />
        <Card $skeleton='true' />
        <Card $skeleton='true' />
        <Card $skeleton='true' />
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr 1fr 1fr'>
        <Card $skeleton='true' />
        <Card $skeleton='true' />
        <Card $skeleton='true' />
        <Card $skeleton='true' />
      </RowContainer>

      <RowContainer $gridrow='1fr 1fr'>
        <Card $skeleton='true' />
        <Card $skeleton='true' />
      </RowContainer>
    </>
  )
}

export default SkeletonCards
